"use client";
import "../styles/global.css";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { getTrendingVideos } from "./lib/utils.js";
import TrendingVideos from "./components/TrendingVideos.jsx";

export default function Page() {
  const [trendingVideos, setTrendingVideos] = useState([]);

  useEffect(() => {
    const handleTrendingVideos = async () => {
      try {
        const response = await getTrendingVideos();
        // console.log(response);
        setTrendingVideos(response);
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      }
    };

    handleTrendingVideos();
  }, []);

  return (
    <>
      <h1 className="text-heading-l font-outfit text-red">
        this is the home page
      </h1>
      {trendingVideos && <TrendingVideos trendingVideos={trendingVideos} />}
    </>
  );
}
