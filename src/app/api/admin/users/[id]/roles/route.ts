import { NextRequest, NextResponse } from 'next/server';
import { requireRole, assignRole, removeRole, UserRole } from '@/src/lib/auth-utils';
import { prisma } from '@/src/lib/prisma';

// GET /api/admin/users/[id]/roles - Get user's roles (admin only)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if requesting user is admin
    await requireRole(['ADMIN', 'SUPER_ADMIN']);

  const { id: userId } = await params;

    const userWithRoles = await prisma.user.findUnique({
      where: { id: userId },
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
      },
    });

    if (!userWithRoles) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const roleData = userWithRoles.userRoles.map(ur => ({
      role: ur.role,
      locationId: ur.locationId,
      locationName: ur.location?.name || null,
      isActive: ur.isActive,
      createdAt: ur.createdAt,
    }));

    return NextResponse.json({
      user: {
        id: userWithRoles.id,
        name: userWithRoles.name,
        email: userWithRoles.email,
      },
      roles: roleData,
    });
  } catch (error: any) {
    console.error('Error fetching user roles:', error);
    
    if (error.message.includes('Unauthorized')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/admin/users/[id]/roles - Assign role to user (admin only)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if requesting user is admin
    const adminUser = await requireRole(['ADMIN', 'SUPER_ADMIN']);

  const { id: userId } = await params;
    const body = await request.json();
    const { role, locationId } = body;

    // Validate role
    if (!role || !['USER', 'ADMIN', 'ATTENDANT', 'SUPER_ADMIN'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role specified' },
        { status: 400 }
      );
    }

    // Only SUPER_ADMIN can assign SUPER_ADMIN role
    if (role === 'SUPER_ADMIN' && !adminUser.roles.some(r => r.role === 'SUPER_ADMIN')) {
      return NextResponse.json(
        { error: 'Only super admins can assign super admin role' },
        { status: 403 }
      );
    }

    // Verify user exists
    const targetUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!targetUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // If locationId provided, verify location exists
    if (locationId) {
      const location = await prisma.parkingLocation.findUnique({
        where: { id: locationId },
      });

      if (!location) {
        return NextResponse.json(
          { error: 'Location not found' },
          { status: 404 }
        );
      }
    }

    // Assign the role
    await assignRole(userId, role as UserRole, locationId);

    return NextResponse.json({
      message: 'Role assigned successfully',
      user: {
        id: targetUser.id,
        name: targetUser.name,
        email: targetUser.email,
      },
      assignedRole: {
        role,
        locationId: locationId || null,
      },
    });
  } catch (error: any) {
    console.error('Error assigning role:', error);
    
    if (error.message.includes('Unauthorized')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to assign role' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/users/[id]/roles - Remove role from user (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if requesting user is admin
    const adminUser = await requireRole(['ADMIN', 'SUPER_ADMIN']);

  const { id: userId } = await params;
    const url = new URL(request.url);
    const role = url.searchParams.get('role');
    const locationId = url.searchParams.get('locationId');

    if (!role) {
      return NextResponse.json(
        { error: 'Role parameter is required' },
        { status: 400 }
      );
    }

    // Only SUPER_ADMIN can remove SUPER_ADMIN role
    if (role === 'SUPER_ADMIN' && !adminUser.roles.some(r => r.role === 'SUPER_ADMIN')) {
      return NextResponse.json(
        { error: 'Only super admins can remove super admin role' },
        { status: 403 }
      );
    }

    // Verify user exists
    const targetUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!targetUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Don't allow removing the last admin role if there's only one
    if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
      const adminCount = await prisma.userRole.count({
        where: {
          role: { in: ['ADMIN', 'SUPER_ADMIN'] },
          isActive: true,
        },
      });

      if (adminCount <= 1) {
        return NextResponse.json(
          { error: 'Cannot remove the last admin user' },
          { status: 400 }
        );
      }
    }

    // Remove the role
    await removeRole(userId, role as UserRole, locationId || undefined);

    return NextResponse.json({
      message: 'Role removed successfully',
      user: {
        id: targetUser.id,
        name: targetUser.name,
        email: targetUser.email,
      },
      removedRole: {
        role,
        locationId: locationId || null,
      },
    });
  } catch (error: any) {
    console.error('Error removing role:', error);
    
    if (error.message.includes('Unauthorized')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to remove role' },
      { status: 500 }
    );
  }
}
