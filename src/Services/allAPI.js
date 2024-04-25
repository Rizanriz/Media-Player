import server_url from "./Server_url";
import commonAPI from "./commonAPI";

export const addVideoAPI = async (video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}