export const BASE_URL = "http://localhost:8000/api";

export const API_PATHS = {
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        GET_PROFILE: "/auth/profile",
    },
    RESUME:{
        CREATE: "/resume",
        GET_ALL: "/resume",
        GET_BY_ID: (id: string) => `/resume/${id}`,
        UPDATE: (id: string) => `/resume/${id}`,
        DELETE: (id: string) => `/resume/${id}`,
        UPLOAD_IMAGE: (id: string) => `/resume/${id}/upload-images`,
    },
    IMAGE:{
        UPLOAD: "/auth/upload-image",
    }
        
}