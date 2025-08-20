'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
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
  const { data: session, status } = useSession();
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRoles = async () => {
    if (!session?.user?.id) {
      setRoles([]);
      setIsLoading(false);
      return;
    }

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
    if (status === 'authenticated') {
      fetchRoles();
    } else if (status === 'unauthenticated') {
      setRoles([]);
      setIsLoading(false);
    }
  }, [session?.user?.id, status]);

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
    isLoading: isLoading || status === 'loading',
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
