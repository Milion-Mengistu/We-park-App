import { useSession as useNextAuthSession } from 'next-auth/react';
import { getServerSession as getNextAuthServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { UserRole } from './auth-utils';

// Extend the default session type with our custom properties
export interface ExtendedSession {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    roles?: UserRole[];
  };
  expires: string;
}

/**
 * Typed version of useSession hook
 */
export function useSession() {
  const { data: session, status, update } = useNextAuthSession();
  
  return {
    session: session as ExtendedSession | null,
    status,
    update,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
  };
}

/**
 * Typed version of getServerSession
 */
export async function getServerSession() {
  const session = await getNextAuthServerSession(authOptions);
  return session as ExtendedSession | null;
}

/**
 * Get user roles from session
 */
export function getUserRolesFromSession(session: ExtendedSession | null): UserRole[] {
  return session?.user?.roles || [];
}

/**
 * Check if session has specific role
 */
export function sessionHasRole(session: ExtendedSession | null, role: UserRole): boolean {
  const roles = getUserRolesFromSession(session);
  return roles.includes(role);
}

/**
 * Check if session has any of the required roles
 */
export function sessionHasAnyRole(session: ExtendedSession | null, requiredRoles: UserRole[]): boolean {
  const roles = getUserRolesFromSession(session);
  return requiredRoles.some(role => roles.includes(role));
}

/**
 * Check if session user is admin
 */
export function sessionIsAdmin(session: ExtendedSession | null): boolean {
  return sessionHasAnyRole(session, ['ADMIN', 'SUPER_ADMIN']);
}

/**
 * Check if session user is attendant
 */
export function sessionIsAttendant(session: ExtendedSession | null): boolean {
  return sessionHasRole(session, 'ATTENDANT');
}

/**
 * Get primary role from session
 */
export function getSessionPrimaryRole(session: ExtendedSession | null): UserRole {
  const roles = getUserRolesFromSession(session);
  
  if (roles.includes('SUPER_ADMIN')) return 'SUPER_ADMIN';
  if (roles.includes('ADMIN')) return 'ADMIN';
  if (roles.includes('ATTENDANT')) return 'ATTENDANT';
  
  return 'USER';
}

/**
 * Validate session and ensure user is authenticated
 */
export function requireAuthentication(session: ExtendedSession | null): asserts session is ExtendedSession {
  if (!session?.user?.id) {
    throw new Error('Authentication required');
  }
}

/**
 * Validate session and ensure user has required roles
 */
export function requireRoles(session: ExtendedSession | null, requiredRoles: UserRole[]): asserts session is ExtendedSession {
  requireAuthentication(session);
  
  if (!sessionHasAnyRole(session, requiredRoles)) {
    throw new Error(`Insufficient permissions. Required roles: ${requiredRoles.join(', ')}`);
  }
}
