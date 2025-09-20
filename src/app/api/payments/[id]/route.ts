import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PaymentService } from '@/src/lib/payment-service';
import { z } from 'zod';

const idParamSchema = z.object({ id: z.string().min(1) });
const paymentPatchSchema = z.object({ action: z.enum(['confirm_cash']) });

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const raw = await params;
    const parsed = idParamSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payment id', details: parsed.error.flatten() }, { status: 400 });
    }
    const { id: paymentId } = parsed.data;
    const paymentStatus = await PaymentService.getPaymentStatus(paymentId);

    return NextResponse.json(paymentStatus);
  } catch (error) {
    console.error('Get payment status error:', error);
    const message = error instanceof Error ? error.message : 'Failed to get payment status';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const raw = await params;
    const parsedId = idParamSchema.safeParse(raw);
    if (!parsedId.success) {
      return NextResponse.json({ error: 'Invalid payment id', details: parsedId.error.flatten() }, { status: 400 });
    }
    const { id: paymentId } = parsedId.data;

    const body = await request.json();
    const parsedBody = paymentPatchSchema.safeParse(body);
    if (!parsedBody.success) {
      return NextResponse.json({ error: 'Invalid action', details: parsedBody.error.flatten() }, { status: 400 });
    }
    const { action } = parsedBody.data;

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
    const message = error instanceof Error ? error.message : 'Failed to update payment';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
