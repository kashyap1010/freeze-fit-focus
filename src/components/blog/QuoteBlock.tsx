import React from 'react';

interface QuoteBlockProps {
  children: React.ReactNode;
  author?: string;
  source?: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ children, author, source }) => {
  return (
    <figure className="my-4 relative">
      <blockquote className="border-l-4 border-gray-300 pl-4 py-1 italic text-gray-700 leading-relaxed font-normal">
        {children}
      </blockquote>
      
      {(author || source) && (
        <figcaption className="flex items-center text-muted mt-2 pl-4">
          <div className="text-sm">
            {author && <span className="font-medium">{author}</span>}
            {author && source && <span className="mx-1 text-gray-400">•</span>}
            {source && <span className="italic text-gray-600">{source}</span>}
          </div>
        </figcaption>
      )}
    </figure>
  );
}; 