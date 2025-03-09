
import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "work";
  size?: "default" | "sm" | "lg" | "icon";
  showArrow?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, variant = "default", size = "default", showArrow = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "default",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "bg-black text-white px-4 py-1.5 text-sm font-medium rounded-full hover:bg-black/90 transition-all": variant === "work",
          },
          {
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          "group",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className={cn(showArrow ? "mr-2" : "")}>
          {children}
        </span>
        
        {showArrow && (
          <ArrowRight 
            className="inline-flex h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" 
          />
        )}
      </button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
