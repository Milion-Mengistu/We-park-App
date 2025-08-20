'use client';

import { useRoles, useRoleGuard } from '@/src/hooks/useRoles';
import { UserRole } from '@/src/lib/auth-utils';
import { ReactNode } from 'react';

interface RoleGuardProps {
  children: ReactNode;
  requiredRoles: UserRole[];
  fallback?: ReactNode;
  showLoading?: boolean;
}

/**
 * Component that conditionally renders children based on user roles
 */
export function RoleGuard({ 
  children, 
  requiredRoles, 
  fallback = null, 
  showLoading = true 
}: RoleGuardProps) {
  const { hasAccess, isLoading } = useRoleGuard(requiredRoles);

  if (isLoading && showLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

/**
 * Higher-order component for role-based page protection
 */
export function withRoleGuard<T extends {}>(
  Component: React.ComponentType<T>,
  requiredRoles: UserRole[],
  options?: {
    fallback?: ReactNode;
    redirect?: string;
  }
) {
  return function ProtectedComponent(props: T) {
    const { hasAccess, isLoading } = useRoleGuard(requiredRoles);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      );
    }

    if (!hasAccess) {
      if (options?.redirect) {
        window.location.href = options.redirect;
        return null;
      }

      return options?.fallback || (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
            <p className="text-gray-600">You don't have permission to access this page.</p>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

/**
 * Component for displaying role-specific information
 */
export function RoleDisplay() {
  const { roles, primaryRole, isAdmin, isAttendant, isLoading } = useRoles();

  if (isLoading) {
    return <span className="text-gray-500">Loading...</span>;
  }

  if (roles.length === 0) {
    return <span className="text-gray-500">No roles assigned</span>;
  }

  const roleColors = {
    SUPER_ADMIN: 'bg-purple-100 text-purple-800',
    ADMIN: 'bg-red-100 text-red-800',
    ATTENDANT: 'bg-blue-100 text-blue-800',
    USER: 'bg-green-100 text-green-800',
  };

  return (
    <div className="flex flex-wrap gap-1">
      {roles.map((role) => (
        <span
          key={role}
          className={`px-2 py-1 text-xs font-medium rounded-full ${roleColors[role]}`}
        >
          {role}
        </span>
      ))}
    </div>
  );
}
