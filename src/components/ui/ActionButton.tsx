import { ReactNode } from 'react';
import Link from 'next/link';

interface ActionButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function ActionButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  className = ""
}: ActionButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 transform focus:outline-none focus:ring-4 rounded-xl";
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3',
    lg: 'px-6 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg focus:ring-blue-100 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-100',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg focus:ring-red-100 hover:scale-[1.02] active:scale-[0.98]',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg focus:ring-green-100 hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-gray-100'
  };

  const disabledClasses = "opacity-50 cursor-not-allowed transform-none";

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${disabled || loading ? disabledClasses : variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {loading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      {loading ? 'Loading...' : children}
      {!loading && icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}
