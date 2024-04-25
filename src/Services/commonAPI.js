import axios from "axios";

const commonAPI = async (httpmethod,url,reqBody)=>{
    const  reqConfiq ={
        method:httpmethod,
        url,
        data:reqBody
    }
    return await axios(reqConfiq).then(res=>{
        return res
    }).catch(error=>{
        return error
    })
}

export default commonAPI