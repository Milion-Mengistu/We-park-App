import { NextRequest, NextResponse } from 'next/server';
import { PaymentService } from '@/src/lib/payment-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const provider = searchParams.get('provider');

    if (!provider) {
      return NextResponse.json(
        { error: 'Provider parameter required' },
        { status: 400 }
      );
    }

    // Verify webhook signature (implement based on provider requirements)
    const signature = request.headers.get('x-webhook-signature');
    
    // For demo purposes, we'll skip signature verification
    // In production, verify the webhook signature here
    
    await PaymentService.handlePaymentWebhook(provider, body);

    return NextResponse.json({ message: 'Webhook processed successfully' });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
