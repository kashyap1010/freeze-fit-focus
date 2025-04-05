
import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function Callout({ children, className, icon = <AlertCircle className="h-5 w-5" /> }: CalloutProps) {
  return (
    <div className={cn(
      "bg-dark text-dark-foreground border-l-4 border-primary p-4 my-6 rounded-r-lg",
      className
    )}>
      <div className="flex items-start">
        <div className="mr-3 mt-1 text-primary">{icon}</div>
        <div className="text-base font-medium">{children}</div>
      </div>
    </div>
  );
}
