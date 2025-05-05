import axios from "axios";
import { useTokenContext } from "../context/TokenContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useVideosContext } from "../context/videoContext";

export const useBookMark = () => {
  const userId = useTokenContext();
  const user = useAuthContext();
  const {fetchRecommendedVideos, fetchTrendingVideos, setTrendingVideos, setRecommendedVideos} = useVideosContext()

 
  // get user token
  const token = user.user.token;
  // body data to be sent with request

  const addBookMark = async (videoId, videoCategory) => {
    const userData = {
      userId: userId,
      videoId: videoId,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/bookmarks",
        userData,
        {
          // headers for the request
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // get the updated recommended videos so they can reflect that the video is bookmarked
       
      if(videoCategory === "trending"){
        setTrendingVideos((prev)=>{
          // take the array of videos and filter them based on the id, 
          // spread the video object maintaining the rest of the other data
          // then update the is_bookmarked key value pair
          // if not return video object untouched
          // return new array from map 
          return prev.map((video)=> video.id === videoId ? {...video, is_bookmarked: true} : video)
         })
      } else {
        setRecommendedVideos((prev)=>{
          return prev.map((video)=> video.id === videoId ? {...video, is_bookmarked: true} : video)
        })
      }

     
      

    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };

  const deleteBookMarkVideo = async (videoId, videoCategory) => {
    const videoData = {
      videoId: videoId,
    }

    console.log(videoCategory)

    try{
      const deleteResponse = await axios.delete("http://localhost:3000/bookmarks",
      {
        data: videoData,
        // headers for the request
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if(videoCategory === "trending"){
        setTrendingVideos((prev)=>{
          // take the array of videos and filter them based on the id, 
          // spread the video object maintaining the rest of the other data
          // then update the is_bookmarked key value pair
          // if not return video object untouched
          // return new array from map 
          console.log("remove trending")
          return prev.map((video)=> video.id === videoId ? {...video, is_bookmarked: false} : video)
         })
      } else {
        setRecommendedVideos((prev)=>{
          return prev.map((video)=> video.id === videoId ? {...video, is_bookmarked: false} : video)
        })
      }
    }catch(err){
      console.error("Error deleting bookmark:", err);
    }

  }

  return { addBookMark, deleteBookMarkVideo };
};
