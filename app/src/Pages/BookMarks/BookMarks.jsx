import React from "react";
import LayOut from "@components/LayOut/LayOut";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import { useVideosContext } from "../../context/videoContext";

function BookMarks() {
  const { bookmarks } = useVideosContext();
  // filter out the movies and tv series
  const bookmarkMovies = bookmarks.filter(
    (movie) => movie.category !== "TV Series"
  );

  const bookmarkTvSeries = bookmarks.filter(
    (movie) => movie.category === "TV Series"
  );

  return (
    <LayOut>
      <VideoContainer
        data={bookmarkMovies}
        title="Bookmarked Movies"
        bookmarkedPage={true}
      />
      <VideoContainer
        data={bookmarkTvSeries}
        title="Bookmarked TV Series"
        bookmarkedPage={true}
      />
    </LayOut>
  );
}

export default BookMarks;
