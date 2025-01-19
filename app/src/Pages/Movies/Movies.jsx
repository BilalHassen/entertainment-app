import React from "react";
import { useVideosContext } from "../../context/videoContext";
import VideoCard from "../../components/VideoCard/VideoCard";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import LayOut from "../../components/LayOut/LayOut";
import "./movies.scss";
function Movies() {
  const { movies } = useVideosContext(); // Access the context
  console.log(movies);

  return (
    <>
      <LayOut>
        <VideoContainer data={movies} title="Movies" />
      </LayOut>
    </>
  );
}

export default Movies;
