import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

axiosInstance.interceptors.request.use((config)=>{
    // get the user from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // check for the token inside of user object
    if(user?.token){
        config.headers.Authorization = `Bearer ${user.token}`
    }

    // return the config object 
    // console.log("➡️ Outgoing request headers:", config.headers);
  return config;
})

// handle the token exipration 
axiosInstance.interceptors.response.use(
    response => response, 
    error =>{
        if (
            error.response?.status === 401 &&
            error.response?.data?.error?.includes("expired")
          ) {
            localStorage.removeItem("user");
            window.location.href = "/signin"; 
          }
          return Promise.reject(error);
    }
)

export default axiosInstance;