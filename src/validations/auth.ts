import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Please enter a valid email address"),
  password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters long"),
});

export const signupSchema = z.object({
  name: z.string().nonempty("Full name is required"),
  email: z.string().nonempty("Email is required").email("Please enter a valid email address"),
  password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().nonempty("Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>; 