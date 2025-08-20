import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { prisma } from './prisma';

export type UserRole = 'USER' | 'ADMIN' | 'ATTENDANT' | 'SUPER_ADMIN';

export interface UserWithRoles {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  roles: Array<{
    role: UserRole;
    locationId?: string | null;
    isActive: boolean;
  }>;
}

/**
 * Get user roles from database
 */
export async function getUserRoles(userId: string): Promise<UserRole[]> {
  try {
    const userRoles = await prisma.userRole.findMany({
      where: {
        userId,
        isActive: true,
      },
      select: {
        role: true,
      },
    });

    return userRoles.map(ur => ur.role as UserRole);
  } catch (error) {
    console.error('Error fetching user roles:', error);
    return [];
  }
}

/**
 * Get user with roles from database
 */
export async function getUserWithRoles(userId: string): Promise<UserWithRoles | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        userRoles: {
          where: { isActive: true },
          select: {
            role: true,
            locationId: true,
            isActive: true,
          },
        },
      },
    });

    if (!user) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      roles: user.userRoles.map(ur => ({
        role: ur.role as UserRole,
        locationId: ur.locationId,
        isActive: ur.isActive,
      })),
    };
  } catch (error) {
    console.error('Error fetching user with roles:', error);
    return null;
  }
}

/**
 * Check if user has specific role
 */
export function hasRole(userRoles: UserRole[], requiredRole: UserRole): boolean {
  return userRoles.includes(requiredRole);
}

/**
 * Check if user has any of the required roles
 */
export function hasAnyRole(userRoles: UserRole[], requiredRoles: UserRole[]): boolean {
  return requiredRoles.some(role => userRoles.includes(role));
}

/**
 * Check if user is admin (ADMIN or SUPER_ADMIN)
 */
export function isAdmin(userRoles: UserRole[]): boolean {
  return hasAnyRole(userRoles, ['ADMIN', 'SUPER_ADMIN']);
}

/**
 * Check if user is super admin
 */
export function isSuperAdmin(userRoles: UserRole[]): boolean {
  return hasRole(userRoles, 'SUPER_ADMIN');
}

/**
 * Check if user is attendant
 */
export function isAttendant(userRoles: UserRole[]): boolean {
  return hasRole(userRoles, 'ATTENDANT');
}

/**
 * Get user's primary role (highest privilege)
 */
export function getPrimaryRole(userRoles: UserRole[]): UserRole {
  if (hasRole(userRoles, 'SUPER_ADMIN')) return 'SUPER_ADMIN';
  if (hasRole(userRoles, 'ADMIN')) return 'ADMIN';
  if (hasRole(userRoles, 'ATTENDANT')) return 'ATTENDANT';
  return 'USER';
}

/**
 * Server-side role authorization
 */
export async function requireRole(requiredRoles: UserRole[]): Promise<UserWithRoles> {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    throw new Error('Unauthorized: No valid session');
  }

  const userWithRoles = await getUserWithRoles(session.user.id);
  
  if (!userWithRoles) {
    throw new Error('Unauthorized: User not found');
  }

  const userRoles = userWithRoles.roles.map(r => r.role);
  
  if (!hasAnyRole(userRoles, requiredRoles)) {
    throw new Error(`Unauthorized: Requires one of: ${requiredRoles.join(', ')}`);
  }

  return userWithRoles;
}

/**
 * Assign role to user
 */
export async function assignRole(
  userId: string,
  role: UserRole,
  locationId?: string
): Promise<void> {
  try {
    // Check if role already exists
    const existing = await prisma.userRole.findFirst({
      where: {
        userId,
        role,
        locationId: locationId || null,
      },
    });

    if (existing) {
      // Update existing role
      await prisma.userRole.update({
        where: { id: existing.id },
        data: {
          isActive: true,
          updatedAt: new Date(),
        },
      });
    } else {
      // Create new role
      await prisma.userRole.create({
        data: {
          userId,
          role,
          locationId,
          isActive: true,
        },
      });
    }
  } catch (error) {
    console.error('Error assigning role:', error);
    throw new Error('Failed to assign role');
  }
}

/**
 * Remove role from user
 */
export async function removeRole(
  userId: string, 
  role: UserRole, 
  locationId?: string
): Promise<void> {
  try {
    await prisma.userRole.updateMany({
      where: {
        userId,
        role,
        locationId: locationId || null,
      },
      data: {
        isActive: false,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error('Error removing role:', error);
    throw new Error('Failed to remove role');
  }
}
