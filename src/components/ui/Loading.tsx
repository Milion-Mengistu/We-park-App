import { ReactNode } from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

export function Loading({
  size = 'md',
  variant = 'spinner',
  text,
  fullScreen = false,
  className = ""
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => (
    <div className={`border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin ${sizeClasses[size]}`}></div>
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  );

  const renderPulse = () => (
    <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center animate-pulse ${sizeClasses[size]}`}>
      <div className="text-white">
        <svg className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-8 h-8'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      {renderLoader()}
      {text && (
        <p className={`text-gray-600 font-medium ${textSizes[size]}`}>{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {content}
      </div>
    );
  }

  return content;
}

// Specific loading components for common use cases
export function PageLoading({ text = "Loading..." }: { text?: string }) {
  return <Loading size="lg" text={text} fullScreen={true} />;
}

export function ButtonLoading() {
  return <Loading size="sm" variant="spinner" />;
}

export function CardLoading({ text }: { text?: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
      <Loading size="md" text={text} />
    </div>
  );
}
