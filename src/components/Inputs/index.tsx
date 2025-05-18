import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="mb-4">
        <label className="text-[13px] text-slate-800">{label}</label>
        <div className="input-box">
          <input
            ref={ref}
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none"
            {...props}
          />

          {type === "password" && (
            <>
              {showPassword ? (
                <FaRegEye
                  size={22}
                  className="text-primary cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaRegEyeSlash
                  size={22}
                  className="text-slate-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
