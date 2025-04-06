import React, { useState } from 'react';
import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = 'javascript',
  filename,
  showLineNumbers = false 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const displayLanguage = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'jsx': 'JSX',
    'tsx': 'TSX',
    'html': 'HTML',
    'css': 'CSS',
    'json': 'JSON',
    'bash': 'Bash',
    'sh': 'Shell',
    'python': 'Python',
    'java': 'Java',
    'c': 'C',
    'cpp': 'C++',
  }[language.toLowerCase()] || language;

  // Basic syntax highlighting function
  const highlightCode = (code: string) => {
    if (typeof code !== 'string') return code;
    
    // Apply syntax highlighting with regex patterns
    let highlighted = code
      // Keywords
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|try|catch|new|this|typeof|instanceof)\b/g, '<span class="text-violet-400">$1</span>')
      // Strings
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-amber-300">$1</span>')
      // Comments
      .replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500">$1</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="text-blue-300">$1</span>')
      // Functions and methods
      .replace(/(\w+)(?=\s*\()/g, '<span class="text-sky-300">$1</span>')
      // JSX/HTML tags
      .replace(/(&lt;\/?[a-zA-Z0-9]+)/g, '<span class="text-blue-400">$1</span>')
      // Props/attributes in JSX
      .replace(/([a-zA-Z0-9]+)(?==)/g, '<span class="text-green-300">$1</span>');
    
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  return (
    <div className="my-8 group">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-t-md border-b border-gray-700">
        <div className="flex items-center space-x-2">
          {filename && (
            <span className="text-gray-300 font-mono text-xs mr-2">{filename}</span>
          )}
          <span className="text-blue-300 text-xs font-medium">{displayLanguage}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700/50"
          aria-label="Copy code"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-400" />
          ) : (
            <DocumentDuplicateIcon className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="relative bg-gray-900 rounded-b-md overflow-auto">
        <pre className={`p-4 text-sm font-mono text-gray-100 whitespace-pre overflow-x-auto ${showLineNumbers ? 'pl-12' : ''}`}>
          {showLineNumbers ? (
            <div className="absolute left-0 top-0 px-2 py-4 text-right border-r border-gray-700/40 h-full bg-gray-800/30 select-none">
              {(children as string).split('\n').map((_, i) => (
                <div key={i} className="text-gray-500 select-none text-xs pr-2">{i + 1}</div>
              ))}
            </div>
          ) : null}
          <code>
            {typeof children === 'string' ? highlightCode(children) : children}
          </code>
        </pre>
      </div>
    </div>
  );
}; 