import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  dark?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        dark
          ? "bg-brand-slate border-slate-700/60 text-slate-100 shadow-md"
          : "bg-white border-slate-200 text-slate-900 shadow-subtle",
        hoverEffect &&
          (dark
            ? "hover:border-brand-teal/50 hover:shadow-glow hover:-translate-y-1"
            : "hover:border-slate-300 hover:shadow-card hover:-translate-y-1"),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-6 sm:p-8 pb-4", className)} {...props}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-6 sm:p-8 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("p-6 sm:p-8 pt-0 border-t border-slate-100 mt-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};
