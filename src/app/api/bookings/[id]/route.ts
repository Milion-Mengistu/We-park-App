import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { BookingService } from '@/src/lib/booking-service';

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
    const { action, additionalHours } = body;

    const userId = session.user.email;

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
    return NextResponse.json(
      { error: error.message || 'Failed to update booking' },
      { status: 500 }
    );
  }
}
