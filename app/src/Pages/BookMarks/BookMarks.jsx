import React, { useEffect } from "react";
import LayOut from "@components/LayOut/LayOut";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import { useVideosContext } from "../../context/videoContext";
import { get } from "../../api/get";

function BookMarks() {
  const { bookmarks, setBookMarks } = useVideosContext();
  // filter out the movies and tv series
  const bookmarkMovies = bookmarks.filter(
    (movie) => movie.category !== "TV Series"
  );

  const bookmarkTvSeries = bookmarks.filter(
    (movie) => movie.category === "TV Series"
  );

  // load bookmark videos when navigation is to the bookmarks page
 useEffect(()=>{
  const refreshBookMarks = async () =>{
    await get("/bookmarks", setBookMarks);
  }
  refreshBookMarks()
  console.log(bookmarks)
 },[])

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
        // change this to a different layout use video container for now
        <VideoContainer
          data={bookmarkTvSeries}
          title="Your Bookmarked content will appear here"
          bookmarkedPage={true}
        />
      )}
    </LayOut>
  );
}

export default BookMarks;
