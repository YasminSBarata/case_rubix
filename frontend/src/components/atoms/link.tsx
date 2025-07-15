import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva("flex justify-center items-center", {
  variants: {
    variant: {
      primary:
        "hover:text-redSecundary active:text-redTertiary rounded-lg p-3 outline-0 hover:transition-all hover:duration-150 hover:ease-in-out focus-visible:outline focus-visible:outline-black rounded-[10px] cursor-pointer",
      secondary: "flex", //caso precise
    },
  },
});

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary";
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, target, className, variant, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(linkVariants({ variant }), className)}
        target={target}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Link.displayName = "Link";

export default Link;
