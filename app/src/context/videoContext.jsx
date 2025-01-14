import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import RecommendedVideos from "../components/RecommendedVideos/RecommendedVideos";

export const videoContext = createContext();

// Custom hook to access the context
export const useVideosContext = () => {
  return useContext(videoContext);
};

// VideoProvider Component
export const VideoProvider = ({ children }) => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/videos/trending-videos"
        );
        setTrendingVideos(response.data);
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      }
    };

    const fetchRecommendedVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/videos/recommended-videos"
        );
        setRecommendedVideos(response.data);
      } catch (error) {
        console.error("Error fetching recommended videos:", error);
      }
    };

    fetchTrendingVideos();
    fetchRecommendedVideos();
  }, []);

  return (
    <videoContext.Provider
      value={{
        trendingVideos,
        setTrendingVideos,
        recommendedVideos,
        setRecommendedVideos,
      }}
    >
      {children}
    </videoContext.Provider>
  );
};
