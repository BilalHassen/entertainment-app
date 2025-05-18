import React from "react";
import LayOut from "@components/LayOut/LayOut";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import { useBookmarksQuery } from "../../hooks/useBookmarksQuery";
import { useAuthContext } from "../../hooks/useAuthContext";

function BookMarks() {
  const { user } = useAuthContext();
  const token = user?.token;

  const { data: bookmarks = [], isLoading } = useBookmarksQuery(token);

  const bookmarkMovies = bookmarks.filter(
    (video) => video.category !== "TV Series"
  );

  const bookmarkTvSeries = bookmarks.filter(
    (video) => video.category === "TV Series"
  );

  if (isLoading) return <LayOut>Loading...</LayOut>;

  return (
    <LayOut>
      {bookmarks.length > 0 ? (
        <>
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
        </>
      ) : (
        <VideoContainer
          data={[]}
          title="Your Bookmarked content will appear here"
          bookmarkedPage={true}
        />
      )}
    </LayOut>
  );
}

export default BookMarks;
