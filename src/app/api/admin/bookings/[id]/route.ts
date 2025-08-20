import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const bookingId = params.id;
    const body = await request.json();
    const { action, status } = body;

    switch (action) {
      case 'update_status':
        const updatedBooking = await prisma.booking.update({
          where: { id: bookingId },
          data: { status },
        });

        // Update slot status if needed
        if (status === 'CANCELLED') {
          await prisma.parkingSlot.update({
            where: { id: updatedBooking.slotId },
            data: { status: 'AVAILABLE' },
          });
        } else if (status === 'ACTIVE') {
          await prisma.parkingSlot.update({
            where: { id: updatedBooking.slotId },
            data: { status: 'OCCUPIED' },
          });
        }

        return NextResponse.json(updatedBooking);

      case 'cancel':
        const booking = await prisma.booking.findUnique({
          where: { id: bookingId },
        });

        if (!booking) {
          return NextResponse.json(
            { error: 'Booking not found' },
            { status: 404 }
          );
        }

        if (!['PENDING', 'CONFIRMED'].includes(booking.status)) {
          return NextResponse.json(
            { error: 'Cannot cancel this booking' },
            { status: 400 }
          );
        }

        await prisma.booking.update({
          where: { id: bookingId },
          data: { status: 'CANCELLED' },
        });

        // Free up the slot
        await prisma.parkingSlot.update({
          where: { id: booking.slotId },
          data: { status: 'AVAILABLE' },
        });

        // Create cancellation notification
        await prisma.notification.create({
          data: {
            userId: booking.userId,
            title: 'Booking Cancelled',
            message: 'Your booking has been cancelled by an administrator',
            type: 'BOOKING',
            priority: 'HIGH',
            data: JSON.stringify({ bookingId, action: 'ADMIN_CANCELLED' }),
          },
        });

        return NextResponse.json({ message: 'Booking cancelled successfully' });

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Update booking error:', error);
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    );
  }
}
