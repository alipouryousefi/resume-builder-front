import React from "react";
import { LuLoader } from "react-icons/lu";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({  children, isLoading, loadingText, variant = "primary", className = "", disabled, ...props }, ref) => {
    const baseStyles = "w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center";
    
    const variantStyles = {
      primary: "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-50",
      outline: "border border-primary text-primary hover:bg-primary/10 disabled:border-primary/50 disabled:text-primary/50"
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className} ${isLoading || disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <LuLoader className="animate-spin mr-2" size={18} />
            {loadingText || children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button; 