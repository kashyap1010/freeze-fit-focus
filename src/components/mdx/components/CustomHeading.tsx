
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";

interface CustomHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const sizeClasses = {
  h1: "text-4xl font-bold text-gradient my-6",
  h2: "text-3xl font-bold mt-12 mb-6 pb-2 border-b",
  h3: "text-2xl font-semibold mt-10 mb-4",
  h4: "text-xl font-semibold mt-8 mb-4",
  h5: "text-lg font-semibold mt-6 mb-4",
  h6: "text-base font-semibold mt-6 mb-4",
};

export function CustomHeading({ as, children, className, id, ...props }: CustomHeadingProps) {
  const Heading = as;
  
  const handleLinkClick = () => {
    if (id) {
      navigator.clipboard.writeText(window.location.href.split('#')[0] + '#' + id);
    }
  };

  return (
    <Heading 
      id={id} 
      className={cn(
        "group relative scroll-mt-20",
        sizeClasses[as],
        className
      )} 
      {...props}
    >
      {children}
      {id && (
        <a 
          href={`#${id}`}
          onClick={handleLinkClick}
          aria-label={`Link to ${id}`}
          className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Link className="h-4 w-4 text-muted-foreground hover:text-primary" />
        </a>
      )}
    </Heading>
  );
}
