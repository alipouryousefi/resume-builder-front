import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Input from "../../components/Inputs";
import Button from "../../components/Button";
import { UserContext } from "../../context/userContext";
import { authService } from "../../services/authService";
import toast from "react-hot-toast";
import { loginSchema, type LoginFormData } from "../../validations/auth";

interface LoginProps {
  setCurrentPage: (page: string) => void;
}

const Login = ({ setCurrentPage }: LoginProps) => {
  const navigation = useNavigate();
  const { updateUser } = React.useContext(UserContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      const { token } = data;
      updateUser(data);
      localStorage.setItem("accessToken", token);
      navigation("/dashboard");
    },
    onError: (error: any) => {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your detail to login
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="text"
          label="Email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs pb-2.5">{errors.email.message}</p>
        )}
        
        <Input
          {...register("password")}
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 text-xs pb-2.5">{errors.password.message}</p>
        )}
        
        <Button 
          type="submit" 
          isLoading={loginMutation.isPending}
        >
          LOGIN
        </Button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{" "}
          <span
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage("signup")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
