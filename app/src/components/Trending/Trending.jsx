import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useVideosContext } from "../../context/videoContext";
import TrendingVideoCard from "../TrendingVideoCard/TrendingVideoCard";
import React from "react";

function Trending() {
  const { trendingVideos } = useVideosContext(); // Access the context

  useEffect(() => {
    console.log(trendingVideos);
  }, [trendingVideos]);
  return (
    <section className="TrendingVideos">
      <h1>Trending bar</h1>
      {trendingVideos.map((video, index) => {
        const {
          category,
          id,
          is_bookmarked,
          is_trending,
          rating,
          title,
          url,
          year,
        } = video;
        return (
          <TrendingVideoCard
            key={id}
            category={category}
            bookmarked={is_bookmarked}
            trending={is_trending}
            rating={rating}
            title={title}
            url={url}
            year={year}
          />
        );
      })}
    </section>
  );
}

export default Trending;
