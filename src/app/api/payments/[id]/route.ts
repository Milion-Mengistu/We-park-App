import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PaymentService } from '@/src/lib/payment-service';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const paymentId = params.id;
    const paymentStatus = await PaymentService.getPaymentStatus(paymentId);

    return NextResponse.json(paymentStatus);
  } catch (error) {
    console.error('Get payment status error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to get payment status' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const paymentId = params.id;
    const body = await request.json();
    const { action } = body;

    const attendantId = session.user.email;

    if (action === 'confirm_cash') {
      await PaymentService.confirmCashPayment(paymentId, attendantId);
      return NextResponse.json({ message: 'Cash payment confirmed' });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Payment update error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update payment' },
      { status: 500 }
    );
  }
}
