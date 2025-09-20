import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/src/lib/api-auth';
import { prisma } from '@/src/lib/prisma';
import { selectBooking } from '@/src/lib/selects';
import { adminBookingsQuerySchema, toPlainNumber } from '@/src/lib/validation';

// Force dynamic evaluation and disable route caching to ensure latest code runs
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export const GET: RouteHandler = withAdminAuth(async (request: NextRequest, userWithRoles) => {
  try {
  // handler start
    const { searchParams } = new URL(request.url);
    const parsed = adminBookingsQuerySchema.safeParse({
      page: searchParams.get('page') ?? undefined,
      limit: searchParams.get('limit') ?? undefined,
      status: searchParams.get('status') ?? undefined,
      locationId: searchParams.get('locationId') ?? undefined,
    });

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid query parameters', details: parsed.error.flatten() }, { status: 400 });
    }

    const { page, limit, status, locationId } = parsed.data as any;

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
        select: selectBooking(false),
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.booking.count({ where }),
    ]);

    // Normalize Decimal fields to numbers for safe JSON consumption
    const bookings = bookingsRaw.map((b: any) => ({
      ...b,
      totalAmount: toPlainNumber(b.totalAmount),
      payment: b.payment ? { ...b.payment, amount: toPlainNumber(b.payment.amount) } : null,
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
