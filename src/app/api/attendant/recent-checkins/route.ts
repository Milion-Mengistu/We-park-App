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

    // Get recent check-ins from today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const recentCheckins = await prisma.booking.findMany({
      where: {
        status: 'ACTIVE',
        actualStartTime: {
          gte: today,
        },
      },
      include: {
        slot: {
          include: {
            location: {
              select: {
                name: true,
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        actualStartTime: 'desc',
      },
      take: 20,
    });

    const formattedCheckins = recentCheckins.map(booking => ({
      id: booking.id,
      slotNumber: booking.slot.slotNumber,
      location: booking.slot.location.name,
      customerName: booking.user.name,
      customerEmail: booking.user.email,
      checkInTime: booking.actualStartTime,
      endTime: booking.endTime,
      time: booking.actualStartTime ? 
        new Date(booking.actualStartTime).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }) : 'Unknown',
    }));

    return NextResponse.json(formattedCheckins);
  } catch (error) {
    console.error('Get recent check-ins error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recent check-ins' },
      { status: 500 }
    );
  }
}
