import { prisma } from "./prisma";

// Define BookingResponse type here
export type BookingResponse = {
  id: string;
  qrCode: string;
  checkInCode: string;
  status: string;
  totalAmount: number;
  startTime?: string;
  endTime?: string;
  qrCodeImage?: string; // Pre-generated PNG data URL
  slot: {
    slotNumber: string;
    location: {
      name: string;
      address: string;
    };
  };
};

import { generateQRCode, generateCheckInCode } from "./qr-service";
import { generateRealQRPNGDataURL } from "./real-qr";

export class BookingService {
  private static async columnExists(tableName: string, columnName: string): Promise<boolean> {
    try {
      const result = await prisma.$queryRawUnsafe<any[]>(
        `SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND lower(table_name) = lower($1) AND lower(column_name) = lower($2) LIMIT 1`,
        tableName,
        columnName
      );
      return Array.isArray(result) && result.length > 0;
    } catch {
      return false;
    }
  }
  static async checkOut(bookingId: string) {
    // Complete booking and free slot
    const updated = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: 'COMPLETED',
        actualEndTime: new Date(),
      },
      select: { id: true, slotId: true },
    });

    await prisma.parkingSlot.update({
      where: { id: updated.slotId },
      data: { status: 'AVAILABLE' },
    });

    return { id: updated.id, status: 'COMPLETED' };
  }
  static async cancelBooking(bookingId: string, userId: string) {
    // Cancel if not active/completed
    const b = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: { id: true, userId: true, status: true, slotId: true },
    });
    if (!b) throw new Error('Booking not found');
    if (b.userId !== userId) throw new Error('Forbidden');
    if (b.status === 'ACTIVE' || b.status === 'COMPLETED') {
      throw new Error('Cannot cancel an active or completed booking');
    }
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: 'CANCELLED' },
      select: { id: true },
    });
    await prisma.parkingSlot.update({ where: { id: b.slotId }, data: { status: 'AVAILABLE' } });
    return { id: booking.id, status: 'CANCELLED' };
  }
  static async extendBooking(bookingId: string, additionalHours: number) {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: { id: true, status: true, endTime: true, totalAmount: true, slot: { select: { basePrice: true, locationId: true } } },
    });
    if (!booking) throw new Error('Booking not found');
    if (booking.status !== 'CONFIRMED' && booking.status !== 'ACTIVE') {
      throw new Error('Only active/confirmed bookings can be extended');
    }
    const end = new Date(booking.endTime);
    end.setHours(end.getHours() + additionalHours);

    // price per hour from slot.basePrice
    const basePrice = (booking.slot as any).basePrice;
    const pricePerHour = typeof basePrice === 'object' && basePrice && typeof basePrice.toNumber === 'function'
      ? basePrice.toNumber()
      : Number(basePrice) || 0;
    const increment = Number((pricePerHour * additionalHours).toFixed(2));

    // Safely compute new total amount as number to avoid Decimal + number pitfalls
    const currentAmount = typeof (booking.totalAmount as any)?.toNumber === 'function'
      ? (booking.totalAmount as any).toNumber()
      : Number(booking.totalAmount) || 0;
    const newAmount = Number((currentAmount + increment).toFixed(2));

    const updated = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        endTime: end,
        extendedTimes: { increment: 1 },
        totalAmount: newAmount,
      },
      select: {
        id: true,
        status: true,
        totalAmount: true,
        startTime: true,
        endTime: true,
        slot: { select: { slotNumber: true, location: { select: { name: true, address: true } } } },
      },
    });

    const totalAmount = typeof (updated.totalAmount as any)?.toNumber === 'function'
      ? (updated.totalAmount as any).toNumber()
      : Number(updated.totalAmount);

    return {
      id: updated.id,
      status: updated.status,
      totalAmount,
      startTime: updated.startTime.toISOString(),
      endTime: updated.endTime.toISOString(),
      slot: {
        slotNumber: updated.slot.slotNumber,
        location: { name: updated.slot.location.name, address: updated.slot.location.address },
      },
    } as BookingResponse;
  }
  static async getUserBookings(userId: string, status?: string): Promise<BookingResponse[]> {
    const where: any = { userId };
    if (status) {
      where.status = status;
    }
    const hasImageColumn = await this.columnExists('Booking', 'qrCodeImage');
    const bookings = await prisma.booking.findMany({
      where,
      select: {
        id: true,
        qrCode: true,
        checkInCode: true,
        status: true,
        totalAmount: true,
        startTime: true,
        endTime: true,
        ...(hasImageColumn ? { qrCodeImage: true as const } : {}),
        slot: { select: { slotNumber: true, location: { select: { name: true, address: true } } } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return bookings.map((booking: any) => ({
      id: booking.id,
      qrCode: booking.qrCode!,
      checkInCode: booking.checkInCode!,
      status: booking.status,
      qrCodeImage: booking.qrCodeImage || undefined,
      totalAmount: typeof booking.totalAmount === 'object' && typeof booking.totalAmount.toNumber === 'function'
        ? booking.totalAmount.toNumber()
        : booking.totalAmount,
      startTime: booking.startTime?.toISOString?.() || undefined,
      endTime: booking.endTime?.toISOString?.() || undefined,
      slot: {
        slotNumber: booking.slot.slotNumber,
        location: {
          name: booking.slot.location.name,
          address: booking.slot.location.address,
        },
      },
    }));
  }

  static async createBooking({ userId, slotId, startTime, endTime, totalAmount }: {
    userId: string;
    slotId: string;
    startTime: Date;
    endTime: Date;
    totalAmount: number;
  }): Promise<BookingResponse> {
    // Generate QR and check-in code
    const qrCode = await generateQRCode();
    const checkInCode = generateCheckInCode();

    // Reserve slot
    await prisma.parkingSlot.update({
      where: { id: slotId },
      data: { status: 'RESERVED' },
    });

    // Pre-generate QR image (PNG data URL) for faster subsequent display (optional)
    let qrCodeImage: string | undefined;
    try {
      qrCodeImage = await generateRealQRPNGDataURL({ text: qrCode, size: 240, margin: 2 });
    } catch {
      qrCodeImage = undefined;
    }

    // Create booking including stored image (best-effort). If it fails due to missing column, retry without the field.
    const canStoreImage = await this.columnExists('Booking', 'qrCodeImage');
    const baseData: any = {
      userId,
      slotId,
      startTime,
      endTime,
      totalAmount,
      qrCode,
      checkInCode,
      status: 'PENDING',
    };
    if (canStoreImage && qrCodeImage) {
      baseData.qrCodeImage = qrCodeImage;
    }

    const selectBooking = (withImage: boolean) => ({
      id: true,
      qrCode: true,
      checkInCode: true,
      status: true,
      totalAmount: true,
      startTime: true,
      endTime: true,
      ...(withImage ? { qrCodeImage: true as const } : {}),
      slot: { select: { slotNumber: true, location: { select: { name: true, address: true } } } },
    });

    let booking: any;
    try {
      booking = await prisma.booking.create({
        data: baseData,
        select: selectBooking(!!baseData.qrCodeImage),
      });
    } catch (err) {
      // Retry without qrCodeImage if the column is missing in the connected DB
      const fallbackData = { ...baseData };
      delete (fallbackData as any).qrCodeImage;
      booking = await prisma.booking.create({
        data: fallbackData,
        select: selectBooking(false),
      });
    }

    // Coerce totalAmount to number if Decimal
    let amount: number;
    if (typeof (booking as any).totalAmount === 'object' && typeof (booking as any).totalAmount.toNumber === 'function') {
      amount = (booking as any).totalAmount.toNumber();
    } else {
      amount = Number(booking.totalAmount);
    }

    return {
      id: booking.id,
      qrCode: booking.qrCode!,
      checkInCode: booking.checkInCode!,
      status: booking.status,
      totalAmount: amount,
      startTime: booking.startTime.toISOString(),
      endTime: booking.endTime.toISOString(),
      qrCodeImage: (booking as any).qrCodeImage || undefined,
      slot: {
        slotNumber: booking.slot.slotNumber,
        location: {
          name: booking.slot.location.name,
          address: booking.slot.location.address,
        },
      },
    };
  }

  static async checkIn(identifier: string, attendantId: string) {
    // Find booking by QR or code that is confirmed
    const booking = await prisma.booking.findFirst({
      where: {
        OR: [{ qrCode: identifier }, { checkInCode: identifier }],
      },
      select: { id: true, status: true },
    });
    if (!booking) throw new Error('Booking not found');
    if (booking.status !== 'CONFIRMED') {
      throw new Error('Booking is not ready for check-in');
    }
    const updated = await prisma.booking.update({
      where: { id: booking.id },
      data: { status: 'ACTIVE', actualStartTime: new Date() },
      select: { id: true, status: true, slotId: true },
    });
    await prisma.parkingSlot.update({ where: { id: updated.slotId }, data: { status: 'OCCUPIED' } });
    return { id: updated.id, status: updated.status };
  }
}
