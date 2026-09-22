import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "teal" | "signal";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-brand-navy text-white hover:bg-brand-slate shadow-sm focus-visible:ring-brand-navy active:scale-[0.99]",
      secondary:
        "bg-brand-teal text-brand-dark hover:bg-brand-tealHover font-semibold shadow-subtle focus-visible:ring-brand-teal active:scale-[0.99]",
      signal:
        "bg-signal text-white hover:bg-signal-hover shadow-signal hover:shadow-signal-hover font-semibold focus-visible:ring-signal active:scale-[0.99] rounded-[10px]",
      outline:
        "border border-[#CBD5E1] text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-400 rounded-[10px] shadow-subtle",
      ghost:
        "text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
      dark:
        "bg-brand-dark text-white hover:bg-slate-900 border border-slate-800 shadow-md",
      teal:
        "bg-brand-teal/10 text-brand-teal border border-brand-teal/30 hover:bg-brand-teal/20",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
          {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
