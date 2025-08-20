import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface NotificationRequest {
  userId: string;
  title: string;
  message: string;
  type: 'BOOKING' | 'PAYMENT' | 'EXPIRY' | 'INCIDENT' | 'SYSTEM' | 'PROMOTIONAL';
  priority?: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';
  data?: any;
  scheduledFor?: Date;
}

export class NotificationService {
  static async createNotification(request: NotificationRequest): Promise<void> {
    const notification = await prisma.notification.create({
      data: {
        userId: request.userId,
        title: request.title,
        message: request.message,
        type: request.type,
        priority: request.priority || 'NORMAL',
        data: request.data ? JSON.stringify(request.data) : null,
      },
    });

    // Send real-time notification (implement with WebSockets/SSE in production)
    await this.sendRealTimeNotification(notification);
  }

  static async getUserNotifications(
    userId: string,
    options: {
      unreadOnly?: boolean;
      limit?: number;
      offset?: number;
    } = {}
  ): Promise<any[]> {
    const { unreadOnly = false, limit = 50, offset = 0 } = options;

    const where: any = { userId };
    if (unreadOnly) {
      where.isRead = false;
    }

    return await prisma.notification.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: offset,
    });
  }

  static async markAsRead(notificationId: string, userId: string): Promise<void> {
    await prisma.notification.updateMany({
      where: {
        id: notificationId,
        userId: userId,
      },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });
  }

  static async markAllAsRead(userId: string): Promise<void> {
    await prisma.notification.updateMany({
      where: {
        userId: userId,
        isRead: false,
      },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });
  }

  static async deleteNotification(notificationId: string, userId: string): Promise<void> {
    await prisma.notification.deleteMany({
      where: {
        id: notificationId,
        userId: userId,
      },
    });
  }

  static async getUnreadCount(userId: string): Promise<number> {
    return await prisma.notification.count({
      where: {
        userId: userId,
        isRead: false,
      },
    });
  }

  // Automated notification triggers
  static async sendBookingReminder(bookingId: string): Promise<void> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        slot: {
          include: {
            location: true,
          },
        },
      },
    });

    if (!booking) return;

    const timeUntilStart = booking.startTime.getTime() - Date.now();
    const hoursUntilStart = Math.round(timeUntilStart / (1000 * 60 * 60));

    if (hoursUntilStart <= 1 && hoursUntilStart > 0) {
      await this.createNotification({
        userId: booking.userId,
        title: 'Parking Reminder',
        message: `Your parking at ${booking.slot.location.name} starts in ${hoursUntilStart} hour(s). Slot: ${booking.slot.slotNumber}`,
        type: 'BOOKING',
        priority: 'HIGH',
        data: {
          bookingId: booking.id,
          action: 'PARKING_REMINDER',
        },
      });
    }
  }

  static async sendExpiryWarning(bookingId: string): Promise<void> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        slot: {
          include: {
            location: true,
          },
        },
      },
    });

    if (!booking || booking.status !== 'ACTIVE') return;

    const timeUntilEnd = booking.endTime.getTime() - Date.now();
    const minutesUntilEnd = Math.round(timeUntilEnd / (1000 * 60));

    if (minutesUntilEnd <= 30 && minutesUntilEnd > 0) {
      await this.createNotification({
        userId: booking.userId,
        title: 'Parking Expires Soon',
        message: `Your parking at ${booking.slot.location.name} expires in ${minutesUntilEnd} minutes. Consider extending or move your vehicle.`,
        type: 'EXPIRY',
        priority: 'URGENT',
        data: {
          bookingId: booking.id,
          action: 'EXPIRY_WARNING',
          minutesRemaining: minutesUntilEnd,
        },
      });
    }
  }

  static async sendPaymentReminder(paymentId: string): Promise<void> {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        booking: {
          include: {
            slot: {
              include: {
                location: true,
              },
            },
          },
        },
      },
    });

    if (!payment || payment.status !== 'PENDING') return;

    const timeSinceCreated = Date.now() - payment.createdAt.getTime();
    const hoursSinceCreated = Math.round(timeSinceCreated / (1000 * 60 * 60));

    if (hoursSinceCreated >= 1) {
      await this.createNotification({
        userId: payment.userId,
        title: 'Payment Pending',
        message: `Please complete your payment of $${payment.amount} for parking at ${payment.booking.slot.location.name}`,
        type: 'PAYMENT',
        priority: 'HIGH',
        data: {
          paymentId: payment.id,
          bookingId: payment.bookingId,
          action: 'PAYMENT_REMINDER',
        },
      });
    }
  }

  static async sendSystemAlert(
    userIds: string[],
    title: string,
    message: string,
    priority: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT' = 'NORMAL'
  ): Promise<void> {
    for (const userId of userIds) {
      await this.createNotification({
        userId,
        title,
        message,
        type: 'SYSTEM',
        priority,
        data: {
          action: 'SYSTEM_ALERT',
          timestamp: new Date().toISOString(),
        },
      });
    }
  }

  static async sendPromotionalNotification(
    userIds: string[],
    title: string,
    message: string,
    promotionData?: any
  ): Promise<void> {
    for (const userId of userIds) {
      await this.createNotification({
        userId,
        title,
        message,
        type: 'PROMOTIONAL',
        priority: 'LOW',
        data: {
          action: 'PROMOTION',
          ...promotionData,
        },
      });
    }
  }

  // Background job to process scheduled notifications
  static async processScheduledNotifications(): Promise<void> {
    // Check for bookings that need reminders
    const upcomingBookings = await prisma.booking.findMany({
      where: {
        status: 'CONFIRMED',
        startTime: {
          gte: new Date(),
          lte: new Date(Date.now() + 2 * 60 * 60 * 1000), // Next 2 hours
        },
      },
    });

    for (const booking of upcomingBookings) {
      await this.sendBookingReminder(booking.id);
    }

    // Check for active bookings that are expiring soon
    const expiringBookings = await prisma.booking.findMany({
      where: {
        status: 'ACTIVE',
        endTime: {
          gte: new Date(),
          lte: new Date(Date.now() + 30 * 60 * 1000), // Next 30 minutes
        },
      },
    });

    for (const booking of expiringBookings) {
      await this.sendExpiryWarning(booking.id);
    }

    // Check for pending payments
    const pendingPayments = await prisma.payment.findMany({
      where: {
        status: 'PENDING',
        createdAt: {
          lte: new Date(Date.now() - 60 * 60 * 1000), // Older than 1 hour
        },
      },
    });

    for (const payment of pendingPayments) {
      await this.sendPaymentReminder(payment.id);
    }
  }

  // Real-time notification delivery (mock implementation)
  private static async sendRealTimeNotification(notification: any): Promise<void> {
    // In production, this would integrate with:
    // - WebSocket connections for real-time browser notifications
    // - Push notification services for mobile apps
    // - SMS/Email services for critical notifications
    // - WhatsApp Business API for customer updates

    console.log('📱 Real-time notification sent:', {
      userId: notification.userId,
      title: notification.title,
      type: notification.type,
      priority: notification.priority,
    });

    // Mock implementation for different notification channels
    if (notification.priority === 'URGENT') {
      await this.sendSMSNotification(notification);
    }

    if (['PAYMENT', 'BOOKING'].includes(notification.type)) {
      await this.sendEmailNotification(notification);
    }

    await this.sendPushNotification(notification);
  }

  private static async sendSMSNotification(notification: any): Promise<void> {
    // Mock SMS service integration
    console.log('📱 SMS sent:', notification.title);
  }

  private static async sendEmailNotification(notification: any): Promise<void> {
    // Mock email service integration
    console.log('📧 Email sent:', notification.title);
  }

  private static async sendPushNotification(notification: any): Promise<void> {
    // Mock push notification service integration
    console.log('🔔 Push notification sent:', notification.title);
  }

  // Notification templates
  static getNotificationTemplate(
    type: string,
    action: string,
    data: any
  ): { title: string; message: string } {
    const templates = {
      BOOKING: {
        CREATED: {
          title: 'Booking Confirmed',
          message: `Your parking booking at ${data.locationName} has been confirmed for ${data.startTime}`,
        },
        REMINDER: {
          title: 'Parking Reminder',
          message: `Don't forget about your parking at ${data.locationName} starting at ${data.startTime}`,
        },
        EXTENDED: {
          title: 'Booking Extended',
          message: `Your parking time has been extended until ${data.newEndTime}`,
        },
      },
      PAYMENT: {
        COMPLETED: {
          title: 'Payment Successful',
          message: `Your payment of $${data.amount} has been processed successfully`,
        },
        FAILED: {
          title: 'Payment Failed',
          message: `Your payment of $${data.amount} could not be processed. Please try again`,
        },
        REMINDER: {
          title: 'Payment Required',
          message: `Please complete your payment of $${data.amount} to confirm your booking`,
        },
      },
      EXPIRY: {
        WARNING: {
          title: 'Parking Expires Soon',
          message: `Your parking expires in ${data.minutesRemaining} minutes. Please move your vehicle or extend your time`,
        },
        EXPIRED: {
          title: 'Parking Expired',
          message: `Your parking time has expired. Additional charges may apply`,
        },
      },
    };

    return templates[type]?.[action] || {
      title: 'Notification',
      message: 'You have a new notification',
    };
  }
}
