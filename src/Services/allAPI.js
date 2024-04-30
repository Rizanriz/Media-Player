import server_url from "./Server_url";
import commonAPI from "./commonAPI";

export const addVideoAPI = async (video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

export const GetallVideoAPI = async (video)=>{
    return await commonAPI("GET",`${server_url}/allVideos`,video)
}

export const removeVidioAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${videoId}`,{})
}

export const saveHistoryAPI = async (video)=>{
    return await commonAPI("POST",`${server_url}/History`,video)
}
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${server_url}/History`,"")
}
export const removeHistoryAI = async (videoId)=>{
    return await commonAPI("DELETE",`${server_url}/History/${videoId}`,{})
}