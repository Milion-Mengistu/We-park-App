import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { BookingService } from '@/src/lib/booking-service';
import { prisma } from '@/src/lib/prisma';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  const { id: bookingId } = await params;
    const body = await request.json();
    const { action, additionalHours } = body;
  // Map email to the real DB user.id for authorization-sensitive actions
  const email = session.user.email;
  const user = await prisma.user.findUnique({ where: { email } });
  const userId = user?.id;

    switch (action) {
      case 'extend':
        if (!additionalHours) {
          return NextResponse.json(
            { error: 'Additional hours required' },
            { status: 400 }
          );
        }
        const extendResult = await BookingService.extendBooking(
          bookingId,
          parseInt(additionalHours)
        );
        return NextResponse.json(extendResult);

      case 'cancel':
        if (!userId) {
          return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        await BookingService.cancelBooking(bookingId, userId);
        return NextResponse.json({ message: 'Booking cancelled successfully' });

      case 'checkout':
        const checkoutResult = await BookingService.checkOut(bookingId);
        return NextResponse.json(checkoutResult);

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Booking update error:', error);
    const message = error instanceof Error ? error.message : 'Failed to update booking';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
