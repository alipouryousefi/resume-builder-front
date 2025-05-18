import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),       
);

// response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }else if (error.response.status === 500) {
            window.location.href = "/error";
            console.log("Server error");
        }else if (error.code === "ECONNABORTED") {
            window.location.href = "/error";
            console.log("Connection error");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;