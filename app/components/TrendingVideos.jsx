// components/trendingVideos.jsx

"use client"; // Ensure this is at the very top
import { useState, useEffect } from "react";
import TrendingVideoCard from "./TrendingVideoCard.jsx";

export default function TrendingVideos({ trendingVideos }) {
  console.log(trendingVideos);
  const sortedVideos = trendingVideos.sort((a, b) => {
    return a.id - b.id;
  });

  console.log(sortedVideos);

  return (
    <>
      <h1 className="text-white">Trending Videos</h1>
      <div className="wrapper flex flex-col gap-4 w-50 ">
        {sortedVideos.map((video) => {
          return (
            <TrendingVideoCard
              key={video.id}
              category={video.category}
              id={video.id}
              bookmarked={video.is_bookmarked}
              trending={video.is_trending}
              rating={video.rating}
              thumbnails={video.thumbnails}
              title={video.title}
              year={video.year}
            />
          );
        })}
      </div>
    </>
  );
}
