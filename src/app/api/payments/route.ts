import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PaymentService } from '@/src/lib/payment-service';
import { z } from 'zod';

const paymentInitiateSchema = z.object({
  bookingId: z.string().min(1, 'bookingId is required'),
  amount: z
    .union([z.number(), z.string()])
    .transform((v) => (typeof v === 'string' ? Number(v) : v))
    .pipe(z.number().positive('amount must be > 0')),
  method: z.enum(['TELEBIRR', 'CBE_BIRR', 'CHAPA', 'CASH']),
  phoneNumber: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const parsed = paymentInitiateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request body', details: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const { bookingId, amount, method, phoneNumber } = parsed.data;

    const paymentResponse = await PaymentService.initiatePayment({
      bookingId,
      amount,
      method,
      phoneNumber,
      returnUrl: `${request.nextUrl.origin}/dashboard`,
    });

    return NextResponse.json(paymentResponse);
  } catch (error) {
    console.error('Payment initiation error:', error);
    const message = error instanceof Error ? error.message : 'Failed to initiate payment';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
