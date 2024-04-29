import server_url from "./Server_url";
import commonAPI from "./commonAPI";

export const addVideoAPI = async (video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}
export const GetallVideoAPI = async (video)=>{
    return await commonAPI("GET",`${server_url}/allVideos`,video)
}