import React from "react";
import { useVideosContext } from "../../context/videoContext";
import RecommendedVideosCard from "../../components/VideoCard/VideoCard";
import LayOut from "../../components/LayOut/LayOut";
import "./movies.scss";
function Movies() {
  const { movies } = useVideosContext(); // Access the context
  console.log(movies);

  return (
    <>
      <LayOut>
        <section className="recommendedVideos">
          {movies.map((video) => {
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
              <RecommendedVideosCard
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
      </LayOut>
    </>
  );
}

export default Movies;
