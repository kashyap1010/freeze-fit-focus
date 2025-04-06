import React from 'react';

interface QuoteBlockProps {
  children: React.ReactNode;
  author?: string;
  source?: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ children, author, source }) => {
  return (
    <figure className="my-10 relative mx-0">
      <div className="absolute -top-4 -left-2 text-primary/20 transform scale-[1.75]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
      </div>
      <blockquote className="pl-10 pr-4 italic text-lg md:text-xl text-gray-700 font-serif leading-relaxed relative z-10">
        {children}
      </blockquote>
      
      {(author || source) && (
        <figcaption className="flex items-center text-gray-600 mt-4 pl-10">
          <div className="h-px w-8 bg-primary/30 mr-3"></div>
          <div>
            {author && <span className="font-medium text-gray-800">{author}</span>}
            {author && source && <span className="mx-1 text-gray-400">•</span>}
            {source && <span className="text-gray-500 italic">{source}</span>}
          </div>
        </figcaption>
      )}
    </figure>
  );
}; 