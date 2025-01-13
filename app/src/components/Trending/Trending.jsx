import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useVideosContext } from "../../context/videoContext";
import React from "react";

function Trending() {
  const { trendingVideos } = useVideosContext(); // Access the context

  useEffect(() => {
    console.log(trendingVideos);
  }, [trendingVideos]);
  return (
    <div>
      <h1>Trending bar</h1>
    </div>
  );
}

export default Trending;
