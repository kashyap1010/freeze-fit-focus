import React, { useState } from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';

interface CodeBlockProps {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = 'javascript',
  showLineNumbers = false
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-lg my-6 overflow-auto text-sm shadow-md group font-mono font-['JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
      <div className="flex justify-between items-center mb-3">
        <div className="text-xs uppercase tracking-wide text-gray-400 font-medium">{language}</div>
        <button
          onClick={copyToClipboard}
          className="bg-gray-700 hover:bg-gray-600 text-gray-200 p-1.5 rounded text-xs flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4 mr-1" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <DocumentDuplicateIcon className="w-4 h-4 mr-1" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto leading-normal">
        {showLineNumbers ? (
          <code className="block">
            {children.split('\n').map((line, index) => (
              <div key={index} className="table-row">
                <span className="table-cell text-right pr-4 select-none text-gray-500 w-12">{index + 1}</span>
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        ) : (
          <code>{children}</code>
        )}
      </pre>
    </div>
  );
}; 