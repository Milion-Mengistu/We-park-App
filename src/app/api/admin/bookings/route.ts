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

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status');
    const locationId = searchParams.get('locationId');

    const skip = (page - 1) * limit;

    let where: any = {};

    if (status) {
      where.status = status;
    }

    if (locationId) {
      where.slot = {
        locationId: locationId,
      };
    }

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          slot: {
            include: {
              location: {
                select: {
                  id: true,
                  name: true,
                  address: true,
                },
              },
            },
          },
          payment: {
            select: {
              id: true,
              status: true,
              method: true,
              amount: true,
              paidAt: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      prisma.booking.count({ where }),
    ]);

    return NextResponse.json({
      bookings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get admin bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
