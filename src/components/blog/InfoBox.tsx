import React from 'react';
import { InformationCircleIcon, CheckCircleIcon, ExclamationCircleIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

interface InfoBoxProps {
  children: React.ReactNode;
  title?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

export const InfoBox: React.FC<InfoBoxProps> = ({ 
  children, 
  title, 
  type = 'info' 
}) => {
  // Style configurations based on type
  const styles = {
    info: {
      container: 'bg-blue-50',
      icon: <InformationCircleIcon className="h-5 w-5 text-blue-600" />,
      header: 'text-blue-800',
      border: 'border-l-4 border-l-blue-500',
    },
    success: {
      container: 'bg-green-50',
      icon: <CheckCircleIcon className="h-5 w-5 text-green-600" />,
      header: 'text-green-800',
      border: 'border-l-4 border-l-green-500',
    },
    warning: {
      container: 'bg-amber-50',
      icon: <ExclamationCircleIcon className="h-5 w-5 text-amber-600" />,
      header: 'text-amber-800',
      border: 'border-l-4 border-l-amber-500',
    },
    error: {
      container: 'bg-red-50',
      icon: <ShieldExclamationIcon className="h-5 w-5 text-red-600" />,
      header: 'text-red-800',
      border: 'border-l-4 border-l-red-500',
    }
  };

  return (
    <div className={`my-8 rounded-md ${styles[type].container} ${styles[type].border}`}>
      <div className="px-4 py-4">
        {title && (
          <div className={`flex items-center mb-2 gap-2`}>
            <span className="flex-shrink-0">{styles[type].icon}</span>
            <h4 className={`font-bold ${styles[type].header}`}>{title}</h4>
          </div>
        )}
        <div className={`${title ? 'ml-7' : ''} text-gray-700 text-base  font-medium leading-relaxed space-y-2`}>
          {children}
        </div>
      </div>
    </div>
  );
}; 