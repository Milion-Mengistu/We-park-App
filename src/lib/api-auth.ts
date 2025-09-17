import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { requireRole, UserRole } from './auth-utils';

/**
 * Middleware to check if user has required roles for API routes
 */
export function withRoleAuth(
  handler: (request: NextRequest, userWithRoles: unknown) => Promise<NextResponse>,
  requiredRoles: UserRole[]
): (request: NextRequest) => Promise<NextResponse> {
  return async (request: NextRequest): Promise<NextResponse> => {
    try {
      const userWithRoles = await requireRole(requiredRoles);
      return await handler(request, userWithRoles);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unauthorized';
      
      if (errorMessage.includes('No valid session')) {
        return NextResponse.json({ error: 'Unauthorized: Please log in' }, { status: 401 });
      }
      
      if (errorMessage.includes('User not found')) {
        return NextResponse.json({ error: 'Unauthorized: User not found' }, { status: 401 });
      }
      
      if (errorMessage.includes('Requires one of')) {
        return NextResponse.json({ 
          error: `Forbidden: ${errorMessage}`,
          requiredRoles 
        }, { status: 403 });
      }
      
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  };
}

/**
 * Wrapper for admin-only API routes
 */
export function withAdminAuth(
  handler: (request: NextRequest, userWithRoles: unknown) => Promise<NextResponse>
): (request: NextRequest) => Promise<NextResponse> {
  return withRoleAuth(handler, ['ADMIN', 'SUPER_ADMIN']);
}

/**
 * Wrapper for attendant or admin API routes
 */
export function withAttendantAuth(
  handler: (request: NextRequest, userWithRoles: unknown) => Promise<NextResponse>
): (request: NextRequest) => Promise<NextResponse> {
  return withRoleAuth(handler, ['ATTENDANT', 'ADMIN', 'SUPER_ADMIN']);
}

/**
 * Wrapper for authenticated user API routes
 */
export function withUserAuth(
  handler: (request: NextRequest, userWithRoles: unknown) => Promise<NextResponse>
): (request: NextRequest) => Promise<NextResponse> {
  return withRoleAuth(handler, ['USER', 'ATTENDANT', 'ADMIN', 'SUPER_ADMIN']);
}

/**
 * Get session with error handling
 */
export async function getAuthSession() {
  try {
    const session = await getServerSession(authOptions);
    return session;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}

/**
 * Simple session check for less critical endpoints
 */
export async function requireSession() {
  const session = await getAuthSession();
  
  if (!session?.user?.id) {
    throw new Error('Unauthorized: No valid session');
  }
  
  return session;
}
