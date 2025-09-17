import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/src/lib/api-auth';
import { prisma } from '@/src/lib/prisma';

// GET /api/admin/users - List all users with their roles (admin only)
type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export const GET: RouteHandler = withAdminAuth(async (request: NextRequest, userWithRoles) => {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const search = url.searchParams.get('search') || '';
    const role = url.searchParams.get('role') || '';

    const skip = (page - 1) * limit;

    // Build where clause
    let where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (role) {
      where.userRoles = {
        some: {
          role: role,
          isActive: true,
        },
      };
    }

    // Get users with pagination
    const [users, totalCount] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        include: {
          userRoles: {
            where: { isActive: true },
            include: {
              location: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
              bookings: true,
            },
          },
        },
        orderBy: [
          { createdAt: 'desc' },
        ],
      }),
      prisma.user.count({ where }),
    ]);

    // Transform the data
    const transformedUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      createdAt: user.createdAt,
      bookingCount: user._count.bookings,
      roles: user.userRoles.map(ur => ({
        role: ur.role,
        locationId: ur.locationId,
        locationName: ur.location?.name || null,
        isActive: ur.isActive,
        createdAt: ur.createdAt,
      })),
      primaryRole: user.userRoles.length > 0 
        ? user.userRoles.find(r => r.role === 'SUPER_ADMIN')?.role ||
          user.userRoles.find(r => r.role === 'ADMIN')?.role ||
          user.userRoles.find(r => r.role === 'ATTENDANT')?.role ||
          user.userRoles.find(r => r.role === 'USER')?.role ||
          'USER'
        : 'USER'
    }));

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      users: transformedUsers,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error: any) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
});
