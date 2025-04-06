import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface ProsConsBoxProps {
  title?: string;
  pros: string[];
  cons: string[];
}

export const ProsConsBox: React.FC<ProsConsBoxProps> = ({ title, pros, cons }) => {
  // Ensure pros and cons are arrays
  const safeProps = {
    title,
    pros: Array.isArray(pros) ? pros : [],
    cons: Array.isArray(cons) ? cons : []
  };

  return (
    <div className="my-8 border border-gray-200 rounded-md overflow-hidden shadow-sm">
      {safeProps.title && (
        <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
          <h3 className="text-base font-medium text-gray-900">{safeProps.title}</h3>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <div className="p-4">
          <h4 className="flex items-center text-green-600 font-medium mb-3 text-sm">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            Pros
          </h4>
          <ul className="space-y-3">
            {safeProps.pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center text-green-500 mr-2 mt-0.5 flex-shrink-0">
                  <CheckCircleIcon className="h-4 w-4" />
                </span>
                <span className="text-gray-700 leading-normal text-base">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-4">
          <h4 className="flex items-center text-red-600 font-medium mb-3 text-sm">
            <XCircleIcon className="h-5 w-5 mr-2" />
            Cons
          </h4>
          <ul className="space-y-3">
            {safeProps.cons.map((con, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">
                  <XCircleIcon className="h-4 w-4" />
                </span>
                <span className="text-gray-700 leading-normal text-base">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}; 