import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { get } from "../api/get"; // Adjust path if using alias
export const videoContext = createContext();

export const useVideosContext = () => useContext(videoContext);

export const VideoProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [trendingVideos, setTrendingVideos] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);

  useEffect(() => {
    if (user) {
      get("/videos/trending-videos", setTrendingVideos);
      get("/videos/recommended-videos", setRecommendedVideos);
      get("/movies", setMovies);
      get("/tv", setTvShows);
      get("/bookmarks", setBookMarks);
    }
  }, [user]);

  return (
    <videoContext.Provider
      value={{
        trendingVideos,
        setTrendingVideos,
        recommendedVideos,
        setRecommendedVideos,
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
