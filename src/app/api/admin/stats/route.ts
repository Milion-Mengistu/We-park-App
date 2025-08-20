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

    // For demo purposes, we'll allow any authenticated user to access admin stats
    // In production, check for admin role here

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

    const todayRevenue = todayPayments._sum.amount || 0;

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
      monthlyRevenue: monthlyRevenue._sum.amount || 0,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Get admin stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch admin statistics' },
      { status: 500 }
    );
  }
}
