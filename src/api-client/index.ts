import axios, { Axios, AxiosProgressEvent, AxiosResponse } from "axios";
import exp from "constants";
const baseUrl = "http://localhost:3000/api/v1"

const API = axios.create({baseURL : baseUrl})

export const testRequest = ()=>{
    return API.get("/test")
}

export const uploadFile = (file : File | Blob , onUploadProgress : (event : AxiosProgressEvent) => void ):Promise<AxiosResponse<any>>=>{

    const formData = new FormData();
    formData.append('file',file);
    return API.post("/file/upload",formData,{
        headers : {
            "Content-Type":'multipart/form-data'
        },
        onUploadProgress : onUploadProgress
    })

}
export const deleteFile = (fileName : string) => {
    return API.delete(`file/delete/${fileName}`)
}