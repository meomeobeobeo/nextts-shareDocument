import axios, { Axios, AxiosResponse } from "axios";
import exp from "constants";
const baseUrl = "http://localhost:3000/api/v1"

const API = axios.create({baseURL : baseUrl})

export const testRequest = ()=>{
    return API.get("/test")
}

export const uploadFile = (file : File | Blob):Promise<AxiosResponse<any>>=>{

    const formData = new FormData();
    formData.append('file',file);
    return API.post("/file/upload",formData,{
        headers : {
            "Content-Type":'multipart/form-data'
        }
    })

}