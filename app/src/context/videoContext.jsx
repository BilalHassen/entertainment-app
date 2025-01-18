import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import RecommendedVideos from "../components/VideoContainer/VideoContainer";

export const videoContext = createContext();

// Custom hook to access the context
export const useVideosContext = () => {
  return useContext(videoContext);
};

// VideoProvider Component
export const VideoProvider = ({ children }) => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [movies, setMovies] = useState([]);

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

    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching recommended videos:", error);
      }
    };

    fetchTrendingVideos();
    fetchRecommendedVideos();
    fetchMovies();
  }, []);

  return (
    <videoContext.Provider
      value={{
        trendingVideos,
        setTrendingVideos,
        recommendedVideos,
        setRecommendedVideos,
        movies,
        setMovies,
      }}
    >
      {children}
    </videoContext.Provider>
  );
};
