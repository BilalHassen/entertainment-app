import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import RecommendedVideos from "../components/VideoContainer/VideoContainer";
import { useAuthContext } from "../hooks/useAuthContext";
export const videoContext = createContext();

// Custom hook to access the context
export const useVideosContext = () => {
  return useContext(videoContext);
};

// VideoProvider Component
export const VideoProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);

  
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/videos/trending-videos",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setTrendingVideos(response.data);
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      }
    };

    const fetchRecommendedVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/videos/recommended-videos",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setRecommendedVideos(response.data);
      } catch (error) {
        console.error("Error fetching recommended videos:", error);
      }
    };

    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchTvShows = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tv", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTvShows(response.data);
      } catch (error) {
        console.error("Error fetching Tv shows:", error);
      }
    };

    const fetchBookMarkVideos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/bookmarks", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setBookMarks(response.data);
      } catch (error) {
        console.error("Error fetching Book marked videos:", error);
      }
    };

    useEffect(()=>{
      if (user && user.token) {
        fetchTrendingVideos();
        fetchRecommendedVideos();
        fetchMovies();
        fetchTvShows();
        fetchBookMarkVideos();
      }
    }, [user])
   

  

  return (
    <videoContext.Provider
      value={{
        trendingVideos,
        setTrendingVideos,
        recommendedVideos,
        setRecommendedVideos,
        fetchRecommendedVideos,
        movies,
        setMovies,
        tvShows,
        setTvShows,
        bookmarks,
        setBookMarks,
      }}
    >
      {children}
    </videoContext.Provider>
  );
};
