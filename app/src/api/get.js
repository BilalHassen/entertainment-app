import axios from "./axiosInstance"

export const get = async (url, setFunc)=>{
    try{
        const response = await axios.get(url)
        setFunc(response.data)
    }catch(error){
        console.error(`${url} failed:`, error.response?.data || error.message);

    }
}