import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/src/lib/api-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export const GET: RouteHandler = withAdminAuth(async (request: NextRequest, userWithRoles) => {
  try {
    const toNumber = (v: any): number =>
      (v && typeof v === 'object' && typeof v.toNumber === 'function')
        ? v.toNumber()
        : Number(v || 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Get total locations
    const totalLocations = await prisma.parkingLocation.count({
      where: { isActive: true },
    });

    // Get total slots
    const totalSlots = await prisma.parkingSlot.count();

    // Get active bookings
    const activeBookings = await prisma.booking.count({
      where: {
        status: { in: ['CONFIRMED', 'ACTIVE'] },
      },
    });

    // Get today's revenue
    const todayPayments = await prisma.payment.aggregate({
      where: {
        status: 'COMPLETED',
        paidAt: {
          gte: today,
          lt: tomorrow,
        },
      },
      _sum: {
        amount: true,
      },
    });

  const todayRevenue = toNumber(todayPayments._sum.amount);

    // Calculate occupancy rate
    const occupiedSlots = await prisma.parkingSlot.count({
      where: { status: 'OCCUPIED' },
    });

    const occupancyRate = totalSlots > 0 ? (occupiedSlots / totalSlots) * 100 : 0;

    // Get additional analytics
    const weeklyBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      },
    });

  const monthlyRevenue = await prisma.payment.aggregate({
      where: {
        status: 'COMPLETED',
        paidAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      },
      _sum: {
        amount: true,
      },
    });

    return NextResponse.json({
      totalLocations,
      totalSlots,
      activeBookings,
      todayRevenue,
      occupancyRate: Math.round(occupancyRate * 100) / 100,
      weeklyBookings,
      monthlyRevenue: toNumber(monthlyRevenue._sum.amount),
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Get admin stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch admin statistics' },
      { status: 500 }
    );
  }
});
