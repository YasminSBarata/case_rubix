import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("flex justify-center items-center", {
  variants: {
    variant: {
      primary:
        "px-10 py-3.5 gap-2.5 rounded-[27px] bg-redPrimary hover:bg-redSecundary active:bg-redTertiary cursor-pointer text-white font-normal text-base w-fit h-fit",
      secondary: "flex", //caso precise
    },
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  variant?: "primary" | "secondary";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant = "primary", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
