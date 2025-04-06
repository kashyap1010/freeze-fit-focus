import React from 'react';
import { 
  InformationCircleIcon, 
  ExclamationTriangleIcon, 
  LightBulbIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

interface CalloutProps {
  children: React.ReactNode;
  title?: string;
  type?: 'info' | 'warning' | 'tip' | 'note';
}

export const Callout: React.FC<CalloutProps> = ({ 
  children, 
  title, 
  type = 'info' 
}) => {
  // Style configurations based on type
  const styles = {
    info: {
      container: 'bg-blue-50 border border-blue-100',
      icon: <InformationCircleIcon className="h-5 w-5 text-blue-600" />,
      text: 'text-blue-900',
    },
    warning: {
      container: 'bg-amber-50 border border-amber-100',
      icon: <ExclamationTriangleIcon className="h-5 w-5 text-amber-600" />,
      text: 'text-amber-900',
    },
    tip: {
      container: 'bg-green-50 border border-green-100',
      icon: <LightBulbIcon className="h-5 w-5 text-green-600" />,
      text: 'text-green-900',
    },
    note: {
      container: 'bg-gray-50 border border-gray-100',
      icon: <SparklesIcon className="h-5 w-5 text-gray-600" />,
      text: 'text-gray-900',
    }
  };

  const headerTitle = title || {
    info: 'Note',
    warning: 'Warning',
    tip: 'Tip',
    note: 'Note'
  }[type];

  return (
    <div className={`my-8 rounded-md ${styles[type].container}`}>
      <div className="px-4 py-3.5">
        <div className="flex items-start gap-2.5">
          <div className="flex-shrink-0 mt-0.5">
            {styles[type].icon}
          </div>
          <div>
            {headerTitle && (
              <h5 className={`font-medium text-base mb-1.5 ${styles[type].text}`}>
                {headerTitle}
              </h5>
            )}
            <div className="text-base text-gray-700 leading-relaxed space-y-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 