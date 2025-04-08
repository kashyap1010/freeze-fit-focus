import React from 'react';
import { 
  InformationCircleIcon, 
  ExclamationTriangleIcon, 
  LightBulbIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

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
      container: 'bg-blue-50',
      icon: <InformationCircleIcon className="h-6 w-6 text-blue-600" />,
      text: 'text-blue-800',
    },
    warning: {
      container: 'bg-amber-50',
      icon: <ExclamationTriangleIcon className="h-6 w-6 text-amber-600" />,
      text: 'text-amber-800',
    },
    tip: {
      container: 'bg-green-50',
      icon: <LightBulbIcon className="h-6 w-6 text-green-600" />,
      text: 'text-green-800',
    },
    note: {
      container: 'bg-gray-100',
      icon: <SparklesIcon className="h-6 w-6 text-gray-600" />,
      text: 'text-gray-800',
    },
    success: {
      container: 'bg-green-50',
      icon: <CheckCircleIcon className="h-6 w-6 text-green-600" />,
      text: 'text-green-800',
    }
  };

  const defaultTitle = {
    info: 'Note',
    warning: 'Warning',
    tip: 'Tip',
    note: 'Note',
    success: 'Success'
  };

  return (
    <div className={`mt-6 mb-0 rounded-xl border shadow-sm ${styles[type].container}`}>
      <div className="px-6 py-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            {styles[type].icon}
          </div>
          <div>
            <h5 className={`text-lg font-bold mb-2 ${styles[type].text}`}>
              {title || defaultTitle[type]}
            </h5>
            <div className="opacity-90 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 