import { API_PATHS } from "../utils/apiPaths";
import axiosInstance from "../utils/axiosInstance";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  profileImageUrl?: string;
}

interface AuthResponse {
  token: string;
  // Add other user data fields as needed
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, credentials);
    return response.data;
  },
  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, credentials);
    return response.data;
  },
}; 