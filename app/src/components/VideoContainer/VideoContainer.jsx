import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import { useVideosContext } from "../../context/videoContext";

function RecommendedVideos() {
  const { recommendedVideos } = useVideosContext(); // Access the context
  console.log(recommendedVideos);
  return (
    <>
      <h1 className="videoContainer-title">Recommended for you</h1>
      <section className="videoContainer">
        {recommendedVideos.map((video) => {
          const {
            category,
            id,
            is_bookmarked,
            is_recommended,
            rating,
            title,
            url,
            year,
          } = video;
          return (
            <VideoCard
              key={video.index}
              category={category}
              id={id}
              is_bookmarked={is_bookmarked}
              is_recommended={is_recommended}
              rating={rating}
              title={title}
              year={year}
              url={url}
            />
          );
        })}
      </section>
    </>
  );
}

export default RecommendedVideos;
