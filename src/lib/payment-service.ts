import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface PaymentRequest {
  bookingId: string;
  amount: number;
  method: 'TELEBIRR' | 'CBE_BIRR' | 'CHAPA' | 'CASH';
  phoneNumber?: string;
  returnUrl?: string;
}

export interface PaymentResponse {
  id: string;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  transactionId?: string;
  paymentUrl?: string;
  message: string;
}

export class PaymentService {
  static async initiatePayment(request: PaymentRequest): Promise<PaymentResponse> {
    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        bookingId: request.bookingId,
        userId: await this.getUserIdFromBooking(request.bookingId),
        amount: request.amount,
        method: request.method,
        status: 'PENDING',
      },
    });

    switch (request.method) {
      case 'TELEBIRR':
        return await this.processTelebirrPayment(payment.id, request);
      case 'CBE_BIRR':
        return await this.processCBEBirrPayment(payment.id, request);
      case 'CHAPA':
        return await this.processChapaPayment(payment.id, request);
      case 'CASH':
        return await this.processCashPayment(payment.id, request);
      default:
        throw new Error('Unsupported payment method');
    }
  }

  static async processTelebirrPayment(paymentId: string, request: PaymentRequest): Promise<PaymentResponse> {
    try {
      // Update payment status
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: 'PROCESSING' },
      });

      // Telebirr API integration (mock implementation)
      const telebirrResponse = await this.callTelebirrAPI({
        amount: request.amount,
        phoneNumber: request.phoneNumber,
        reference: paymentId,
        returnUrl: request.returnUrl,
      });

      if (telebirrResponse.success) {
        await prisma.payment.update({
          where: { id: paymentId },
          data: {
            status: 'COMPLETED',
            transactionId: telebirrResponse.transactionId,
            paidAt: new Date(),
            gatewayResponse: JSON.stringify(telebirrResponse),
          },
        });

        // Confirm booking
        await this.confirmBookingPayment(request.bookingId);

        return {
          id: paymentId,
          status: 'COMPLETED',
          transactionId: telebirrResponse.transactionId,
          message: 'Payment successful via Telebirr',
        };
      } else {
        await prisma.payment.update({
          where: { id: paymentId },
          data: {
            status: 'FAILED',
            gatewayResponse: JSON.stringify(telebirrResponse),
          },
        });

        return {
          id: paymentId,
          status: 'FAILED',
          message: 'Telebirr payment failed',
        };
      }
    } catch (error) {
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: 'FAILED' },
      });

      throw new Error('Telebirr payment processing failed');
    }
  }

  static async processCBEBirrPayment(paymentId: string, request: PaymentRequest): Promise<PaymentResponse> {
    try {
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: 'PROCESSING' },
      });

      // CBE Birr API integration (mock implementation)
      const cbeResponse = await this.callCBEBirrAPI({
        amount: request.amount,
        phoneNumber: request.phoneNumber,
        reference: paymentId,
        returnUrl: request.returnUrl,
      });

      if (cbeResponse.success) {
        await prisma.payment.update({
          where: { id: paymentId },
          data: {
            status: 'COMPLETED',
            transactionId: cbeResponse.transactionId,
            paidAt: new Date(),
            gatewayResponse: JSON.stringify(cbeResponse),
          },
        });

        await this.confirmBookingPayment(request.bookingId);

        return {
          id: paymentId,
          status: 'COMPLETED',
          transactionId: cbeResponse.transactionId,
          message: 'Payment successful via CBE Birr',
        };
      } else {
        await prisma.payment.update({
          where: { id: paymentId },
          data: {
            status: 'FAILED',
            gatewayResponse: JSON.stringify(cbeResponse),
          },
        });

        return {
          id: paymentId,
          status: 'FAILED',
          message: 'CBE Birr payment failed',
        };
      }
    } catch (error) {
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: 'FAILED' },
      });

      throw new Error('CBE Birr payment processing failed');
    }
  }

  static async processChapaPayment(paymentId: string, request: PaymentRequest): Promise<PaymentResponse> {
    try {
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: 'PROCESSING' },
      });

      // Chapa API integration (mock implementation)
      const chapaResponse = await this.callChapaAPI({
        amount: request.amount,
        phoneNumber: request.phoneNumber,
        reference: paymentId,
        returnUrl: request.returnUrl,
      });

      if (chapaResponse.success) {
        return {
          id: paymentId,
          status: 'PENDING',
          paymentUrl: chapaResponse.paymentUrl,
          message: 'Please complete payment on Chapa',
        };
      } else {
        await prisma.payment.update({
          where: { id: paymentId },
          data: {
            status: 'FAILED',
            gatewayResponse: JSON.stringify(chapaResponse),
          },
        });

        return {
          id: paymentId,
          status: 'FAILED',
          message: 'Failed to initiate Chapa payment',
        };
      }
    } catch (error) {
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: 'FAILED' },
      });

      throw new Error('Chapa payment processing failed');
    }
  }

  static async processCashPayment(paymentId: string, request: PaymentRequest): Promise<PaymentResponse> {
    // Cash payments are handled manually by attendants
    await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: 'PENDING',
        gatewayResponse: JSON.stringify({ method: 'CASH', note: 'Awaiting cash payment confirmation' }),
      },
    });

    return {
      id: paymentId,
      status: 'PENDING',
      message: 'Cash payment - please pay at the parking location',
    };
  }

  static async confirmCashPayment(paymentId: string, attendantId: string): Promise<void> {
    await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: 'COMPLETED',
        paidAt: new Date(),
        gatewayResponse: JSON.stringify({
          method: 'CASH',
          confirmedBy: attendantId,
          confirmedAt: new Date(),
        }),
      },
    });

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (payment) {
      await this.confirmBookingPayment(payment.bookingId);
    }
  }

  static async handlePaymentWebhook(provider: string, payload: any): Promise<void> {
    switch (provider) {
      case 'telebirr':
        await this.handleTelebirrWebhook(payload);
        break;
      case 'cbe':
        await this.handleCBEWebhook(payload);
        break;
      case 'chapa':
        await this.handleChapaWebhook(payload);
        break;
      default:
        throw new Error('Unknown payment provider');
    }
  }

  static async getPaymentStatus(paymentId: string): Promise<any> {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        booking: {
          include: {
            slot: {
              include: { location: true },
            },
          },
        },
      },
    });

    if (!payment) {
      throw new Error('Payment not found');
    }

    return {
      id: payment.id,
      status: payment.status,
      amount: payment.amount,
      method: payment.method,
      transactionId: payment.transactionId,
      paidAt: payment.paidAt,
      booking: payment.booking,
    };
  }

  // Mock API implementations (replace with actual API calls)
  private static async callTelebirrAPI(params: any): Promise<any> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful response (85% success rate)
    if (Math.random() > 0.15) {
      return {
        success: true,
        transactionId: `TB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        status: 'COMPLETED',
        amount: params.amount,
      };
    } else {
      return {
        success: false,
        error: 'Insufficient balance or invalid phone number',
      };
    }
  }

  private static async callCBEBirrAPI(params: any): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    if (Math.random() > 0.10) {
      return {
        success: true,
        transactionId: `CBE-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        status: 'COMPLETED',
        amount: params.amount,
      };
    } else {
      return {
        success: false,
        error: 'Transaction declined by bank',
      };
    }
  }

  private static async callChapaAPI(params: any): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      paymentUrl: `https://checkout.chapa.co/pay/${Math.random().toString(36).substr(2, 16)}`,
      checkoutId: `chapa_${Date.now()}`,
    };
  }

  private static async handleTelebirrWebhook(payload: any): Promise<void> {
    // Handle Telebirr webhook notifications
    console.log('Telebirr webhook received:', payload);
  }

  private static async handleCBEWebhook(payload: any): Promise<void> {
    // Handle CBE webhook notifications
    console.log('CBE webhook received:', payload);
  }

  private static async handleChapaWebhook(payload: any): Promise<void> {
    // Handle Chapa webhook notifications
    const { reference, status, transaction_id } = payload;
    
    if (status === 'success') {
      await prisma.payment.update({
        where: { id: reference },
        data: {
          status: 'COMPLETED',
          transactionId: transaction_id,
          paidAt: new Date(),
          gatewayResponse: JSON.stringify(payload),
        },
      });

      const payment = await prisma.payment.findUnique({
        where: { id: reference },
      });

      if (payment) {
        await this.confirmBookingPayment(payment.bookingId);
      }
    }
  }

  private static async getUserIdFromBooking(bookingId: string): Promise<string> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: { userId: true },
    });

    if (!booking) {
      throw new Error('Booking not found');
    }

    return booking.userId;
  }

  private static async confirmBookingPayment(bookingId: string): Promise<void> {
    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: 'CONFIRMED' },
    });

    // Create notification
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (booking) {
      await prisma.notification.create({
        data: {
          userId: booking.userId,
          title: 'Payment Confirmed',
          message: 'Your payment has been confirmed and booking is active',
          type: 'PAYMENT',
          priority: 'NORMAL',
          data: JSON.stringify({ bookingId }),
        },
      });
    }
  }
}
