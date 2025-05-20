import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface InputProps  {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input =({value, onChange, label, placeholder, type="text"}:InputProps)=>{
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="mb-4">
        {label && (
          <label className="text-[13px] text-slate-800">{label}</label>
        )}
        <div className="input-box">
          <input
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none"
            value={value}
            onChange={onChange}
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


export default Input;
