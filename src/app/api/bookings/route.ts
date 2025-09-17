import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { BookingService } from '@/src/lib/booking-service';
import { prisma } from '@/src/lib/prisma';

export async function POST(request: NextRequest) {
  try {
  // Debug: verify BookingService shape at runtime
  console.log('[api/bookings] BookingService keys:', Object.keys(BookingService));
  // @ts-ignore
  console.log('[api/bookings] typeof createBooking:', typeof (BookingService as any).createBooking);

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

    // Map session email to actual DB user id (FK-safe)
    const email = session.user.email;
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: session.user.name || email.split('@')[0],
        },
      });
    }
    const userId = user.id;

    // Be defensive if HMR causes stale export
    const svc: any = BookingService as any;
    if (typeof svc.createBooking !== 'function') {
      throw new Error('BookingService.createBooking is not available at runtime');
    }

    const booking = await svc.createBooking({
      userId,
      slotId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      totalAmount: parseFloat(totalAmount),
    });

    return NextResponse.json(booking);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create booking';
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: message },
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

    const email = session.user.email;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json([]);
    }
    const bookings = await BookingService.getUserBookings(user.id, status || undefined);

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
