import React from "react";
import { useVideosContext } from "../../context/videoContext";

function RecommendedVideos() {
  const { recommendedVideos } = useVideosContext(); // Access the context
  console.log(recommendedVideos);
  return (
    <>
      <h1>Recommended for you</h1>
      <div></div>
    </>
  );
}

export default RecommendedVideos;
