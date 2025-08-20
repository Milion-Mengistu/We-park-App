import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { NotificationService } from '@/src/lib/notification-service';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const unreadOnly = searchParams.get('unread') === 'true';
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    const userId = session.user.email;
    
    const [notifications, unreadCount] = await Promise.all([
      NotificationService.getUserNotifications(userId, {
        unreadOnly,
        limit,
        offset,
      }),
      NotificationService.getUnreadCount(userId),
    ]);

    return NextResponse.json({
      notifications,
      unreadCount,
      hasMore: notifications.length === limit,
    });
  } catch (error) {
    console.error('Get notifications error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { action, notificationId } = body;

    const userId = session.user.email;

    switch (action) {
      case 'mark_read':
        if (!notificationId) {
          return NextResponse.json(
            { error: 'Notification ID required' },
            { status: 400 }
          );
        }
        await NotificationService.markAsRead(notificationId, userId);
        break;

      case 'mark_all_read':
        await NotificationService.markAllAsRead(userId);
        break;

      case 'delete':
        if (!notificationId) {
          return NextResponse.json(
            { error: 'Notification ID required' },
            { status: 400 }
          );
        }
        await NotificationService.deleteNotification(notificationId, userId);
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notification action error:', error);
    return NextResponse.json(
      { error: 'Failed to process notification action' },
      { status: 500 }
    );
  }
}
