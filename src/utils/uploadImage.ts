import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";



const uploadImage = async (file:File) => {
    const formData = new FormData();
    formData.append("image", file);
    try{
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD, formData,{
            headers:{
                "Content-Type":"multipart/form-data",
            },
        });
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export default uploadImage;