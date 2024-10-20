// components/trendingVideos.jsx

"use client"; // Ensure this is at the very top
import { useState, useEffect } from "react";

export default function TrendingVideos({ trendingVideos }) {
  console.log(trendingVideos);
  const sortedVideos = trendingVideos.sort((a, b) => {
    return a.id - b.id;
  });

  console.log(sortedVideos);
  return (
    <div>
      <h1>Trending Videos Component</h1>
    </div>
  );
}
