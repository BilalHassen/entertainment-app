import axios from "axios";
import { useTokenContext } from "../context/TokenContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useVideosContext } from "../context/videoContext";
import { get } from "../api/get";

export const useBookMark = () => {
  const userId = useTokenContext();
  const user = useAuthContext();
  const { setTrendingVideos, setRecommendedVideos, setBookMarks} = useVideosContext()

 
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

     
     
      

    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };

  const deleteBookMarkVideo = async (videoId) => {
    try {
      await axios.delete("http://localhost:3000/bookmarks", {
        data: { videoId },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

   
    } catch (err) {
      console.error("Error deleting bookmark:", err);
    }
  };

  return { addBookMark, deleteBookMarkVideo };
};
