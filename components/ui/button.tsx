import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#1cb0f6] text-primary-foreground shadow hover:bg-[#1ca9ec] dark:text-white text-sm font-semibold shadow-[0_4px_0_#1898d5] active:shadow-[0_0px_0_#000] active:translate-x-0 active:translate-y-1 transition-all",
        destructive:
          "bg-[#ff4b4b] text-destructive-foreground shadow-sm hover:bg-[#ea4848] text-sm font-semibold shadow-[0_4px_0_#c93939] active:shadow-[0_0px_0_#000] active:translate-x-0 active:translate-y-1 transition-all",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-[#e8ebee] dark:hover:bg-[#1c2737] shadow-[0_4px_0_#d1d5d9] dark:shadow-[0_4px_0_#1e293bb8] active:shadow-[0_0px_0_#000] dark:active:shadow-[0_0px_0_#000] active:translate-x-0 active:translate-y-1 transition-all",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
