
import React from "react";
import { cn } from "@/lib/utils";

interface QuoteBlockProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  author?: string;
  source?: string;
}

export function QuoteBlock({ 
  children, 
  className, 
  author, 
  source, 
  ...props 
}: QuoteBlockProps) {
  return (
    <blockquote 
      className={cn(
        "border-l-4 border-primary pl-6 py-2 my-8 italic text-lg text-muted-foreground",
        className
      )} 
      {...props}
    >
      <div>{children}</div>
      {(author || source) && (
        <footer className="mt-2 text-sm font-medium text-muted-foreground not-italic">
          {author && <span className="font-semibold">— {author}</span>}
          {author && source && <span>, </span>}
          {source && <cite>{source}</cite>}
        </footer>
      )}
    </blockquote>
  );
}
