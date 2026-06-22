import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-[0_12px_35px_rgba(6,182,212,.22)]",
        gradient:
          "bg-gradient-to-r from-primary via-blue-500 to-accent text-white shadow-[0_10px_35px_rgba(59,130,246,.25)] hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(59,130,246,.38)]",
        outline:
          "border border-white/15 bg-white/[.04] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[.08]",
        ghost: "text-slate-300 hover:bg-white/[.06] hover:text-white",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-7",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
