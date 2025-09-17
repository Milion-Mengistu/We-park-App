import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/src/lib/api-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export const GET: RouteHandler = withAdminAuth(async (request: NextRequest, userWithRoles) => {
  try {
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || '7d';

    // Calculate date range based on period
    const endDate = new Date();
    let startDate = new Date();
    
    switch (period) {
      case '7d':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(endDate.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(endDate.getDate() - 90);
        break;
      case '1y':
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
    }

    // Get total revenue
    const totalRevenueResult = await prisma.payment.aggregate({
      where: {
        status: 'COMPLETED',
        paidAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      _sum: {
        amount: true,
      },
    });

  const toNumber = (v: any): number => (v && typeof v === 'object' && typeof v.toNumber === 'function') ? v.toNumber() : Number(v || 0);
  const totalRevenue = toNumber(totalRevenueResult._sum.amount);

    // Get total bookings
    const totalBookings = await prisma.booking.count({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    // Get average occupancy
    const totalSlots = await prisma.parkingSlot.count();
    const occupiedSlots = await prisma.parkingSlot.count({
      where: { status: 'OCCUPIED' },
    });
    const averageOccupancy = totalSlots > 0 ? (occupiedSlots / totalSlots) * 100 : 0;

    // Get top locations
    const topLocations = await prisma.parkingLocation.findMany({
      include: {
        slots: {
          include: {
            bookings: {
              where: {
                createdAt: {
                  gte: startDate,
                  lte: endDate,
                },
              },
              include: {
                payment: {
                  where: {
                    status: 'COMPLETED',
                  },
                },
              },
            },
          },
        },
      },
    });

    const topLocationsData = topLocations
      .map(location => {
        const bookings = location.slots.flatMap(slot => slot.bookings);
        const revenue = bookings.reduce((sum, booking) => {
          const amt = booking.payment?.amount;
          const num = typeof amt === 'object' && amt !== null && 'toNumber' in amt
            ? (amt as any).toNumber()
            : (amt != null ? Number(amt as any) : 0);
          return sum + (isNaN(num) ? 0 : num);
        }, 0);
        
        return {
          name: location.name,
          revenue,
          bookings: bookings.length,
        };
      })
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 4);

    // Get payment methods distribution
    const paymentMethods = await prisma.payment.groupBy({
      by: ['method'],
      where: {
        status: 'COMPLETED',
        paidAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      _count: {
        id: true,
      },
      _sum: {
        amount: true,
      },
    });

    const paymentMethodsData = paymentMethods.map(pm => ({
      method: pm.method,
      count: pm._count.id,
      amount: toNumber(pm._sum.amount),
    }));

    // Get daily stats for the period
    const dailyStats = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dayStart = new Date(d);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(d);
      dayEnd.setHours(23, 59, 59, 999);

      const dayBookings = await prisma.booking.count({
        where: {
          createdAt: {
            gte: dayStart,
            lte: dayEnd,
          },
        },
      });

      const dayRevenueResult = await prisma.payment.aggregate({
        where: {
          status: 'COMPLETED',
          paidAt: {
            gte: dayStart,
            lte: dayEnd,
          },
        },
        _sum: {
          amount: true,
        },
      });

  const dayRevenue = toNumber(dayRevenueResult._sum.amount);

      dailyStats.push({
        date: dayStart.toISOString().split('T')[0],
        revenue: dayRevenue,
        bookings: dayBookings,
        occupancy: Math.round(Math.random() * 30 + 60), // Mock occupancy for demo
      });
    }

    // Get monthly trends (last 3 months)
    const monthlyTrends = [];
    for (let i = 2; i >= 0; i--) {
      const monthStart = new Date();
      monthStart.setMonth(monthStart.getMonth() - i, 1);
      monthStart.setHours(0, 0, 0, 0);
      
      const monthEnd = new Date(monthStart);
      monthEnd.setMonth(monthEnd.getMonth() + 1);
      monthEnd.setDate(0);
      monthEnd.setHours(23, 59, 59, 999);

      const monthBookings = await prisma.booking.count({
        where: {
          createdAt: {
            gte: monthStart,
            lte: monthEnd,
          },
        },
      });

      const monthRevenueResult = await prisma.payment.aggregate({
        where: {
          status: 'COMPLETED',
          paidAt: {
            gte: monthStart,
            lte: monthEnd,
          },
        },
        _sum: {
          amount: true,
        },
      });

  const monthRevenue = toNumber(monthRevenueResult._sum.amount);

      monthlyTrends.push({
        month: monthStart.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        revenue: monthRevenue,
        bookings: monthBookings,
      });
    }

    return NextResponse.json({
      totalRevenue,
      totalBookings,
      averageOccupancy: Math.round(averageOccupancy * 100) / 100,
      topLocations: topLocationsData,
      dailyStats,
      paymentMethods: paymentMethodsData,
      monthlyTrends,
    });
  } catch (error) {
    console.error('Get reports error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
});
