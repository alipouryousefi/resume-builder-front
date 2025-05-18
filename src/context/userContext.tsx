import { createContext, useEffect, useState } from "react";
import { API_PATHS } from "../utils/apiPaths";
import axiosInstance from "../utils/axiosInstance";

type UserContextType = {
  user: any;
  loading: boolean;
  updateUser: (user: any) => void;
  clearUser: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  loading: false,
  updateUser: () => {},
  clearUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) return;

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoading(false);
      return;
    }
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
        console.log(response.data);
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
        clearUser();
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  });

  const updateUser = (user: any) => {
    setUser(user);
    localStorage.setItem("accessToken", user.accessToken);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
