import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "teal" | "amber" | "neutral" | "outline" | "subtleDark";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "brand",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full shrink-0";

  const variants = {
    brand: "bg-brand-navy/10 text-brand-navy border border-brand-navy/20",
    teal: "bg-brand-teal/15 text-emerald-800 border border-brand-teal/30",
    amber: "bg-amber-500/10 text-amber-800 border border-amber-500/30",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    outline: "bg-transparent text-slate-600 border border-slate-300",
    subtleDark: "bg-white/10 text-teal-300 border border-white/15 backdrop-blur-sm",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
