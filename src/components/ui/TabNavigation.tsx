import { ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
  badge?: string | number;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

export function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  variant = 'default',
  className = ""
}: TabNavigationProps) {
  const getTabClasses = (isActive: boolean) => {
    const baseClasses = "flex items-center justify-center gap-2 py-3 px-6 font-medium transition-all duration-300";
    
    switch (variant) {
      case 'pills':
        return `${baseClasses} rounded-xl ${
          isActive
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`;
      case 'underline':
        return `${baseClasses} border-b-2 ${
          isActive
            ? 'border-blue-600 text-blue-600'
            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
        }`;
      default:
        return `${baseClasses} rounded-xl ${
          isActive
            ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`;
    }
  };

  const containerClasses = variant === 'underline' 
    ? `flex border-b border-gray-200 ${className}`
    : `flex bg-white rounded-2xl p-2 shadow-lg ${className}`;

  return (
    <div className={containerClasses}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 ${getTabClasses(activeTab === tab.id)}`}
        >
          {tab.icon && tab.icon}
          <span>{tab.label}</span>
          {tab.badge && (
            <span className="ml-1 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
