import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/src/lib/api-auth';
import { prisma } from '@/src/lib/prisma';

type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export const GET: RouteHandler = withAdminAuth(async (request: NextRequest, userWithRoles) => {
  try {
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

  const [bookingsRaw, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        select: {
          id: true,
          status: true,
          totalAmount: true,
          startTime: true,
          endTime: true,
          actualStartTime: true,
          actualEndTime: true,
          qrCode: true,
          checkInCode: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          slot: {
            select: {
              slotNumber: true,
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

    // Normalize Decimal fields to numbers for safe JSON consumption
    const bookings = bookingsRaw.map((b: any) => ({
      ...b,
      totalAmount: typeof b.totalAmount?.toNumber === 'function' ? b.totalAmount.toNumber() : Number(b.totalAmount),
      payment: b.payment
        ? {
            ...b.payment,
            amount: typeof b.payment.amount?.toNumber === 'function' ? b.payment.amount.toNumber() : Number(b.payment.amount),
          }
        : null,
    }));

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
});
