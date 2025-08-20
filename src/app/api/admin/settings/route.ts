import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.systemSettings.findMany({
      orderBy: {
        key: 'asc',
      },
    });

    // Group settings by category
    const categories = [
      {
        name: "General",
        description: "Basic system configuration",
        settings: settings.filter(s => 
          ['SYSTEM_NAME', 'SYSTEM_EMAIL', 'SUPPORT_PHONE', 'MAINTENANCE_MODE'].includes(s.key)
        ),
      },
      {
        name: "Booking",
        description: "Booking and reservation settings",
        settings: settings.filter(s => 
          ['MAX_BOOKING_HOURS', 'BOOKING_GRACE_PERIOD', 'AUTO_CANCEL_HOURS', 'EXTEND_BOOKING_LIMIT'].includes(s.key)
        ),
      },
      {
        name: "Payment",
        description: "Payment and pricing configuration",
        settings: settings.filter(s => 
          ['CURRENCY', 'PAYMENT_TIMEOUT', 'REFUND_POLICY', 'DYNAMIC_PRICING'].includes(s.key)
        ),
      },
      {
        name: "Notifications",
        description: "Notification and communication settings",
        settings: settings.filter(s => 
          ['EMAIL_NOTIFICATIONS', 'SMS_NOTIFICATIONS', 'PUSH_NOTIFICATIONS', 'REMINDER_BEFORE_EXPIRY'].includes(s.key)
        ),
      },
      {
        name: "Security",
        description: "Security and access control settings",
        settings: settings.filter(s => 
          ['SESSION_TIMEOUT', 'MAX_LOGIN_ATTEMPTS', 'QR_CODE_EXPIRY', 'API_RATE_LIMIT'].includes(s.key)
        ),
      },
    ];

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Get settings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}
