import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PaymentService } from '@/src/lib/payment-service';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { bookingId, amount, method, phoneNumber } = body;

    if (!bookingId || !amount || !method) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const paymentResponse = await PaymentService.initiatePayment({
      bookingId,
      amount: parseFloat(amount),
      method,
      phoneNumber,
      returnUrl: `${request.nextUrl.origin}/dashboard`,
    });

    return NextResponse.json(paymentResponse);
  } catch (error) {
    console.error('Payment initiation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to initiate payment' },
      { status: 500 }
    );
  }
}
