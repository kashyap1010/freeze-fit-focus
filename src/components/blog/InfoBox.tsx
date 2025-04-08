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
      icon: <InformationCircleIcon className="h-6 w-6 text-blue-600" />,
      header: 'text-blue-800',
      border: 'border-blue-200',
    },
    success: {
      container: 'bg-green-50',
      icon: <CheckCircleIcon className="h-6 w-6 text-green-600" />,
      header: 'text-green-800',
      border: 'border-green-200',
    },
    warning: {
      container: 'bg-amber-50',
      icon: <ExclamationCircleIcon className="h-6 w-6 text-amber-600" />,
      header: 'text-amber-800',
      border: 'border-amber-200',
    },
    error: {
      container: 'bg-red-50',
      icon: <ShieldExclamationIcon className="h-6 w-6 text-red-600" />,
      header: 'text-red-800',
      border: 'border-red-200',
    }
  };

  const defaultTitle = {
    info: 'Note',
    success: 'Success',
    warning: 'Warning',
    error: 'Error'
  };

  return (
    <div className={`my-5 rounded-xl border ${styles[type].border} shadow-sm ${styles[type].container}`}>
      <div className="px-6 py-4">
        <div className={`flex items-center mb-3 gap-3`}>
          <span className="flex-shrink-0">{styles[type].icon}</span>
          <h4 className={`text-lg font-bold ${styles[type].header}`}>
            {title || defaultTitle[type]}
          </h4>
        </div>
        <div className={`ml-9 opacity-90 leading-relaxed`}>
          {children}
        </div>
      </div>
    </div>
  );
}; 