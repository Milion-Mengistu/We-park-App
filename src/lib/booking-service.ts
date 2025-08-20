import { PrismaClient } from '@prisma/client';
import { generateQRCode, generateCheckInCode } from './qr-service';

const prisma = new PrismaClient();

export interface CreateBookingRequest {
  userId: string;
  slotId: string;
  startTime: Date;
  endTime: Date;
  totalAmount: number;
}

export interface BookingResponse {
  id: string;
  qrCode: string;
  checkInCode: string;
  status: string;
  totalAmount: number;
  slot: {
    slotNumber: string;
    location: {
      name: string;
      address: string;
    };
  };
}

export class BookingService {
  static async createBooking(request: CreateBookingRequest): Promise<BookingResponse> {
    // Check slot availability
    const slot = await prisma.parkingSlot.findUnique({
      where: { id: request.slotId },
      include: { location: true },
    });

    if (!slot) {
      throw new Error('Parking slot not found');
    }

    if (slot.status !== 'AVAILABLE') {
      throw new Error('Parking slot is not available');
    }

    // Check for conflicting bookings
    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        slotId: request.slotId,
        status: { in: ['PENDING', 'CONFIRMED', 'ACTIVE'] },
        OR: [
          {
            startTime: { lte: request.endTime },
            endTime: { gte: request.startTime },
          },
        ],
      },
    });

    if (conflictingBooking) {
      throw new Error('Slot is already booked for the selected time');
    }

    // Generate QR code and check-in code
    const qrCode = await generateQRCode();
    const checkInCode = generateCheckInCode();

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId: request.userId,
        slotId: request.slotId,
        startTime: request.startTime,
        endTime: request.endTime,
        totalAmount: request.totalAmount,
        qrCode,
        checkInCode,
        status: 'PENDING',
      },
      include: {
        slot: {
          include: {
            location: true,
          },
        },
      },
    });

    // Update slot status
    await prisma.parkingSlot.update({
      where: { id: request.slotId },
      data: { status: 'RESERVED' },
    });

    // Create notification
    await this.createBookingNotification(request.userId, booking.id, 'BOOKING_CREATED');

    return {
      id: booking.id,
      qrCode: booking.qrCode!,
      checkInCode: booking.checkInCode!,
      status: booking.status,
      totalAmount: booking.totalAmount,
      slot: {
        slotNumber: booking.slot.slotNumber,
        location: {
          name: booking.slot.location.name,
          address: booking.slot.location.address,
        },
      },
    };
  }

  static async confirmBooking(bookingId: string, paymentId: string): Promise<void> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { payment: true, slot: true },
    });

    if (!booking) {
      throw new Error('Booking not found');
    }

    if (booking.payment?.status !== 'COMPLETED') {
      throw new Error('Payment not completed');
    }

    // Update booking status
    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: 'CONFIRMED' },
    });

    // Create confirmation notification
    await this.createBookingNotification(booking.userId, bookingId, 'BOOKING_CONFIRMED');
  }

  static async checkIn(qrCode: string, attendantId?: string): Promise<any> {
    const booking = await prisma.booking.findUnique({
      where: { qrCode },
      include: {
        slot: { include: { location: true } },
        user: true,
      },
    });

    if (!booking) {
      throw new Error('Invalid QR code');
    }

    if (booking.status !== 'CONFIRMED') {
      throw new Error('Booking is not confirmed');
    }

    const now = new Date();
    const gracePeriod = 15 * 60 * 1000; // 15 minutes

    if (now < new Date(booking.startTime.getTime() - gracePeriod)) {
      throw new Error('Check-in too early');
    }

    if (now > new Date(booking.endTime.getTime() + gracePeriod)) {
      throw new Error('Booking has expired');
    }

    // Update booking and slot
    const updatedBooking = await prisma.booking.update({
      where: { id: booking.id },
      data: {
        status: 'ACTIVE',
        actualStartTime: now,
      },
    });

    await prisma.parkingSlot.update({
      where: { id: booking.slotId },
      data: { status: 'OCCUPIED' },
    });

    // Create check-in notification
    await this.createBookingNotification(booking.userId, booking.id, 'CHECK_IN_SUCCESS');

    return {
      booking: updatedBooking,
      message: 'Check-in successful',
      parkingDetails: {
        location: booking.slot.location.name,
        slotNumber: booking.slot.slotNumber,
        endTime: booking.endTime,
      },
    };
  }

  static async checkOut(bookingId: string): Promise<any> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { slot: { include: { location: true } } },
    });

    if (!booking) {
      throw new Error('Booking not found');
    }

    if (booking.status !== 'ACTIVE') {
      throw new Error('Booking is not active');
    }

    const now = new Date();
    const actualDuration = now.getTime() - (booking.actualStartTime?.getTime() || booking.startTime.getTime());
    const plannedDuration = booking.endTime.getTime() - booking.startTime.getTime();

    let additionalCharges = 0;
    if (actualDuration > plannedDuration) {
      const overtimeHours = Math.ceil((actualDuration - plannedDuration) / (1000 * 60 * 60));
      additionalCharges = overtimeHours * booking.slot.basePrice;
    }

    // Update booking
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: 'COMPLETED',
        actualEndTime: now,
        totalAmount: booking.totalAmount + additionalCharges,
      },
    });

    // Update slot status
    await prisma.parkingSlot.update({
      where: { id: booking.slotId },
      data: { status: 'AVAILABLE' },
    });

    // Handle additional payment if needed
    if (additionalCharges > 0) {
      await this.createBookingNotification(booking.userId, booking.id, 'ADDITIONAL_PAYMENT_REQUIRED');
    } else {
      await this.createBookingNotification(booking.userId, booking.id, 'CHECK_OUT_SUCCESS');
    }

    return {
      booking: updatedBooking,
      additionalCharges,
      totalPaid: booking.totalAmount + additionalCharges,
      duration: Math.round(actualDuration / (1000 * 60)), // minutes
    };
  }

  static async extendBooking(bookingId: string, additionalHours: number): Promise<any> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { slot: true },
    });

    if (!booking) {
      throw new Error('Booking not found');
    }

    if (!['CONFIRMED', 'ACTIVE'].includes(booking.status)) {
      throw new Error('Cannot extend this booking');
    }

    const newEndTime = new Date(booking.endTime.getTime() + additionalHours * 60 * 60 * 1000);
    const additionalAmount = additionalHours * booking.slot.basePrice;

    // Check for conflicts
    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        slotId: booking.slotId,
        status: { in: ['PENDING', 'CONFIRMED', 'ACTIVE'] },
        id: { not: bookingId },
        startTime: { lt: newEndTime },
        endTime: { gt: booking.endTime },
      },
    });

    if (conflictingBooking) {
      throw new Error('Cannot extend - slot is booked by another user');
    }

    // Update booking
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        endTime: newEndTime,
        totalAmount: booking.totalAmount + additionalAmount,
        extendedTimes: booking.extendedTimes + 1,
      },
    });

    await this.createBookingNotification(booking.userId, booking.id, 'BOOKING_EXTENDED');

    return {
      booking: updatedBooking,
      additionalAmount,
      newEndTime,
    };
  }

  static async cancelBooking(bookingId: string, userId: string): Promise<void> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      throw new Error('Booking not found');
    }

    if (booking.userId !== userId) {
      throw new Error('Unauthorized');
    }

    if (!['PENDING', 'CONFIRMED'].includes(booking.status)) {
      throw new Error('Cannot cancel this booking');
    }

    const now = new Date();
    const timeDiff = booking.startTime.getTime() - now.getTime();
    const hoursUntilStart = timeDiff / (1000 * 60 * 60);

    let refundAmount = 0;
    if (hoursUntilStart > 1) {
      refundAmount = booking.totalAmount; // Full refund
    } else if (hoursUntilStart > 0.5) {
      refundAmount = booking.totalAmount * 0.5; // 50% refund
    }
    // No refund if less than 30 minutes

    // Update booking
    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: 'CANCELLED' },
    });

    // Update slot status
    await prisma.parkingSlot.update({
      where: { id: booking.slotId },
      data: { status: 'AVAILABLE' },
    });

    // Process refund if applicable
    if (refundAmount > 0) {
      await this.processRefund(bookingId, refundAmount);
    }

    await this.createBookingNotification(userId, bookingId, 'BOOKING_CANCELLED');
  }

  static async getUserBookings(userId: string, status?: string): Promise<any[]> {
    const where: any = { userId };
    if (status) {
      where.status = status;
    }

    return await prisma.booking.findMany({
      where,
      include: {
        slot: {
          include: { location: true },
        },
        payment: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  private static async createBookingNotification(
    userId: string,
    bookingId: string,
    type: string
  ): Promise<void> {
    const messages = {
      BOOKING_CREATED: 'Your parking booking has been created successfully',
      BOOKING_CONFIRMED: 'Your parking booking has been confirmed',
      CHECK_IN_SUCCESS: 'Check-in successful! Enjoy your parking',
      CHECK_OUT_SUCCESS: 'Check-out completed successfully',
      BOOKING_EXTENDED: 'Your parking time has been extended',
      BOOKING_CANCELLED: 'Your booking has been cancelled',
      ADDITIONAL_PAYMENT_REQUIRED: 'Additional payment required for overtime',
    };

    await prisma.notification.create({
      data: {
        userId,
        title: 'Booking Update',
        message: messages[type] || 'Booking status updated',
        type: 'BOOKING',
        priority: type.includes('REQUIRED') ? 'HIGH' : 'NORMAL',
        data: JSON.stringify({ bookingId, type }),
      },
    });
  }

  private static async processRefund(bookingId: string, amount: number): Promise<void> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { payment: true },
    });

    if (booking?.payment) {
      await prisma.payment.update({
        where: { id: booking.payment.id },
        data: {
          status: 'REFUNDED',
          refundedAt: new Date(),
        },
      });
    }
  }
}
