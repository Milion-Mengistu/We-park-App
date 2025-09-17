'use client';

import { useState, useEffect } from 'react';
import { useSession as useTypedSession } from '@/src/lib/session-utils';
import { UserRole } from '@/src/lib/auth-utils';

interface UseRolesReturn {
  roles: UserRole[];
  isLoading: boolean;
  hasRole: (role: UserRole) => boolean;
  hasAnyRole: (roles: UserRole[]) => boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isAttendant: boolean;
  primaryRole: UserRole;
  refetchRoles: () => Promise<void>;
}

export function useRoles(): UseRolesReturn {
  const { session, status, isAuthenticated, isLoading: sessionLoading } = useTypedSession();
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRoles = async () => {
    if (!session?.user?.id) {
      setRoles([]);
      setIsLoading(false);
      return;
    }

    // Use roles from session if available (faster)
    if (session.user.roles && session.user.roles.length > 0) {
      setRoles(session.user.roles);
      setIsLoading(false);
      return;
    }

    // Fallback to API fetch if roles not in session
    try {
      const response = await fetch(`/api/user/roles?userId=${session.user.id}`);
      if (response.ok) {
        const data = await response.json();
        setRoles(data.roles || []);
      } else {
        setRoles([]);
      }
    } catch (error) {
      console.error('Error fetching user roles:', error);
      setRoles([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchRoles();
    } else if (!sessionLoading && !isAuthenticated) {
      setRoles([]);
      setIsLoading(false);
    }
  }, [session?.user?.id, isAuthenticated, sessionLoading]);

  const hasRole = (role: UserRole): boolean => {
    return roles.includes(role);
  };

  const hasAnyRole = (requiredRoles: UserRole[]): boolean => {
    return requiredRoles.some(role => roles.includes(role));
  };

  const isAdmin = hasAnyRole(['ADMIN', 'SUPER_ADMIN']);
  const isSuperAdmin = hasRole('SUPER_ADMIN');
  const isAttendant = hasRole('ATTENDANT');

  const getPrimaryRole = (): UserRole => {
    if (hasRole('SUPER_ADMIN')) return 'SUPER_ADMIN';
    if (hasRole('ADMIN')) return 'ADMIN';
    if (hasRole('ATTENDANT')) return 'ATTENDANT';
    return 'USER';
  };

  return {
    roles,
    isLoading: isLoading || sessionLoading,
    hasRole,
    hasAnyRole,
    isAdmin,
    isSuperAdmin,
    isAttendant,
    primaryRole: getPrimaryRole(),
    refetchRoles: fetchRoles,
  };
}

/**
 * Hook for role-based conditional rendering
 */
export function useRoleGuard(requiredRoles: UserRole[]): {
  hasAccess: boolean;
  isLoading: boolean;
} {
  const { hasAnyRole, isLoading } = useRoles();

  return {
    hasAccess: hasAnyRole(requiredRoles),
    isLoading,
  };
}
