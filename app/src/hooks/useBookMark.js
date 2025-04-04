import axios from "axios";
import { useTokenContext } from "../context/TokenContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useVideosContext } from "../context/videoContext";

export const useBookMark = () => {
  const userId = useTokenContext();
  const user = useAuthContext();
  const {fetchRecommendedVideos} = useVideosContext()

 
  // get user token
  const token = user.user.token;
  // body data to be sent with request

  const addBookMark = async (videoId) => {
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

       await fetchRecommendedVideos()
      

    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };

  return { addBookMark };
};
