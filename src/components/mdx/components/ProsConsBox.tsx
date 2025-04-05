
import React from "react";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface ProsConsBoxProps {
  pros: string[];
  cons: string[];
  className?: string;
}

export function ProsConsBox({ pros, cons, className }: ProsConsBoxProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 my-8", className)}>
      <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
        <h4 className="text-secondary text-lg font-semibold flex items-center mb-4">
          <Check className="mr-2 h-5 w-5" />
          Pros
        </h4>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex">
              <Check className="text-secondary h-5 w-5 mr-2 shrink-0 mt-0.5" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
        <h4 className="text-destructive text-lg font-semibold flex items-center mb-4">
          <X className="mr-2 h-5 w-5" />
          Cons
        </h4>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex">
              <X className="text-destructive h-5 w-5 mr-2 shrink-0 mt-0.5" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
