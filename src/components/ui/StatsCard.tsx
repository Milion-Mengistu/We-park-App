interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  iconColor: string;
  trend?: {
    value: string;
    isPositive: boolean;
    icon?: React.ReactNode;
  };
  className?: string;
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconColor,
  trend,
  className = ""
}: StatsCardProps) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${iconColor} rounded-xl flex items-center justify-center`}>
          {icon}
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      
      {trend && (
        <div className={`flex items-center gap-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.icon || (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={trend.isPositive ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} 
              />
            </svg>
          )}
          <span className="text-sm font-medium">{trend.value}</span>
        </div>
      )}
      
      {subtitle && !trend && (
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-sm font-medium">{subtitle}</span>
        </div>
      )}
    </div>
  );
}
