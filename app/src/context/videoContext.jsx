import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios

export const videoContext = createContext();

// Custom hook to access the context
export const useVideosContext = () => {
  return useContext(videoContext);
};

// VideoProvider Component
export const VideoProvider = ({ children }) => {
  const [trendingVideos, setTrendingVideos] = useState([]);

  useEffect(() => {
    const getTrendingVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/videos/trending-videos"
        );
        console.log(response);
        setTrendingVideos(response.data); // Store the fetched data in state
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    getTrendingVideos(); // Call the function to fetch data when component mounts
  }, []);

  return (
    <videoContext.Provider value={{ trendingVideos, setTrendingVideos }}>
      {children}
    </videoContext.Provider>
  );
};
