import { ReactNode } from 'react';

interface StatusBadgeProps {
  status: string;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  pulse?: boolean;
  className?: string;
}

export function StatusBadge({
  status,
  variant = 'neutral',
  size = 'md',
  icon,
  pulse = false,
  className = ""
}: StatusBadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const variantClasses = {
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    danger: 'bg-red-50 text-red-700 border-red-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    neutral: 'bg-gray-50 text-gray-700 border-gray-200'
  };

  const dotColors = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
    neutral: 'bg-gray-500'
  };

  return (
    <span className={`inline-flex items-center gap-2 font-medium border rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {!icon && (
        <div className={`w-2 h-2 rounded-full ${dotColors[variant]} ${pulse ? 'animate-pulse' : ''}`}></div>
      )}
      {icon && icon}
      <span className="capitalize">{status}</span>
    </span>
  );
}

// Predefined status badges for common use cases
export function ActiveBadge({ className = "" }: { className?: string }) {
  return (
    <StatusBadge 
      status="Active" 
      variant="success" 
      pulse={true} 
      className={className}
    />
  );
}

export function PendingBadge({ className = "" }: { className?: string }) {
  return (
    <StatusBadge 
      status="Pending" 
      variant="warning" 
      className={className}
    />
  );
}

export function CompletedBadge({ className = "" }: { className?: string }) {
  return (
    <StatusBadge 
      status="Completed" 
      variant="success" 
      className={className}
    />
  );
}

export function CancelledBadge({ className = "" }: { className?: string }) {
  return (
    <StatusBadge 
      status="Cancelled" 
      variant="danger" 
      className={className}
    />
  );
}
