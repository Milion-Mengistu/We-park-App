import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { BookingService } from '@/src/lib/booking-service';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { slotId, startTime, endTime, totalAmount } = body;

    if (!slotId || !startTime || !endTime || !totalAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For demo purposes, we'll use email as userId
    // In production, you'd have proper user ID mapping
    const userId = session.user.email;

    const booking = await BookingService.createBooking({
      userId,
      slotId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      totalAmount: parseFloat(totalAmount),
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const userId = session.user.email;
    const bookings = await BookingService.getUserBookings(userId, status || undefined);

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
