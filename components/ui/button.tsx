import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          "text-white w-auto rounded-md  border-transparent px-5 py-3 bg-black hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 font-semibold transition duration-200",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
