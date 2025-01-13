import React from "react";
import DynamicImage from "../DynamicImage/DynamicImage";
import "./TrendingVideoCard.scss";

function TrendingVideoCard({
  category,
  bookmarked,
  trending,
  rating,
  title,
  url,
  year,
}) {
  console.log(url[0]);
  return (
    <div
      className="trendingVideos__card"
      style={{
        backgroundImage: `url(${url[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>content box</h1>
    </div>
  );
}

export default TrendingVideoCard;
