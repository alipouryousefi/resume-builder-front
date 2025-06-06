import { Resume } from "../types";
import { API_PATHS } from "../utils/apiPaths";
import axiosInstance from "../utils/axiosInstance";


export const resumeService = {
  getAllResumes: async (): Promise<Resume[]> => {
    const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
    return response.data.resumes;
  },

  getResumeById: async (id: string): Promise<Resume> => {
    const response = await axiosInstance.get(API_PATHS.RESUME.GET_BY_ID(id));
    return response.data.resume;
  },

  createResume: async (title: string): Promise<Resume> => {
    const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, {
      title
    });
    return response.data.resume;
  },
}; 