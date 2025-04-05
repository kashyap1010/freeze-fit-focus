
import React, { useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  className?: string;
}

export function CodeBlock({ children, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = () => {
    if (!codeRef.current?.textContent) return;
    
    navigator.clipboard.writeText(codeRef.current.textContent);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={cn("relative my-6 rounded-lg bg-dark overflow-hidden", className)}>
      {language && (
        <div className="absolute top-2 right-2 flex items-center space-x-2">
          <div className="px-2 py-1 text-xs font-mono text-muted-foreground bg-muted/30 rounded">
            {language}
          </div>
          <button
            type="button"
            className="p-1.5 rounded-md text-muted-foreground hover:bg-muted/30 hover:text-primary transition-colors"
            onClick={copyToClipboard}
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <CheckIcon size={16} className="text-secondary" />
            ) : (
              <CopyIcon size={16} />
            )}
          </button>
        </div>
      )}
      <pre
        ref={codeRef}
        className="p-4 overflow-x-auto text-sm"
        style={{ fontFamily: "monospace" }}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
