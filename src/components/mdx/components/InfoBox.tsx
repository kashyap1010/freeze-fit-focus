
import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, Info, Check, AlertTriangle } from "lucide-react";

type InfoBoxVariant = "info" | "success" | "warning" | "error";

interface InfoBoxProps {
  variant?: InfoBoxVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<InfoBoxVariant, { bgColor: string; borderColor: string; icon: React.ReactNode }> = {
  info: { 
    bgColor: "bg-primary/10", 
    borderColor: "border-primary", 
    icon: <Info className="h-5 w-5 text-primary font-bold" /> 
  },
  success: { 
    bgColor: "bg-secondary/10", 
    borderColor: "border-secondary", 
    icon: <Check className="h-5 w-5 text-secondary font-bold" /> 
  },
  warning: { 
    bgColor: "bg-amber-500/10", 
    borderColor: "border-amber-500", 
    icon: <AlertTriangle className="h-5 w-5 text-amber-500 font-bold" /> 
  },
  error: { 
    bgColor: "bg-destructive/10", 
    borderColor: "border-destructive", 
    icon: <AlertCircle className="h-5 w-5 text-destructive font-bold" /> 
  },
};

export function InfoBox({ 
  variant = "info", 
  title, 
  children, 
  className 
}: InfoBoxProps) {
  const { bgColor, borderColor, icon } = variantStyles[variant];
  
  return (
    <div 
      className={cn(
        "my-6 rounded-lg p-4 border-l-4", 
        bgColor, 
        borderColor,
        className
      )}
    >
      <div className="flex items-start">
        <div className="mt-0.5 mr-3">{icon}</div>
        <div className="flex-1">
          {title && (
            <h4 className="text-xl mb-2 font-bold">
              {title}
            </h4>
          )}
          <div className="text-sm prose max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
