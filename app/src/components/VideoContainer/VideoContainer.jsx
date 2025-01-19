import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import { useVideosContext } from "../../context/videoContext";

function VideoContainer({ data, title }) {
  return (
    <>
      <h1 className="videoContainer-title">{title}</h1>
      <section className="videoContainer">
        {data.map((video) => {
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
              key={video.id}
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

export default VideoContainer;
