import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface ProsConsBoxProps {
  title?: string;
  pros: string[];
  cons: string[];
}

export const ProsConsBox: React.FC<ProsConsBoxProps> = ({ 
  title = "Pros and Cons", 
  pros = [], 
  cons = [] 
}) => {
  return (
    <div className="my-6 rounded-xl border shadow-lg">
      {title && (
        <div className="px-6 py-4 border-b bg-gradient-to-r from-gray-50 to-gray-100">
          <h4 className="text-lg font-bold">{title}</h4>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <div className="p-6 bg-gradient-to-br from-green-50">
          <h5 className="flex items-center text-base font-bold text-green-800 mb-4">
            <CheckCircleIcon className="h-5 w-5 mr-2 text-green-600" />
            Pros
          </h5>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li 
                key={`pro-${index}`}
                className="flex items-start bg-white p-2 rounded-lg shadow-sm"
              >
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-red-50">
          <h5 className="flex items-center text-base font-bold text-red-800 mb-4">
            <XCircleIcon className="h-5 w-5 mr-2 text-red-600" />
            Cons
          </h5>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li 
                key={`con-${index}`}
                className="flex items-start bg-white p-2 rounded-lg shadow-sm"
              >
                <XCircleIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}; 