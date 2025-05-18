import { API_PATHS } from "../utils/apiPaths";
import axiosInstance from "../utils/axiosInstance";



const uploadImage = async (file:File) => {
    const formData = new FormData();
    formData.append("file", file);
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