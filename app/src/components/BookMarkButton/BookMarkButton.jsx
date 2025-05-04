import React from 'react'
import { useState } from 'react';
import { useBookMark } from "../../hooks/useBookMark";

function BookMarkButton({is_bookmarked, bookMarkIcon, prefixClass, videoId}) {

      // state for when a video is bookmarked
  // take this logic and put in a resuable component with the jsx structure below under the comments
  const [isBookmarked, setBookmark] = useState(false);

  const { addBookMark, deleteBookMarkVideo } = useBookMark();
  const handleBookmark = async () => {
    await addBookMark(videoId);
  };

  const removeBookMark = async () => {
    await deleteBookMarkVideo(videoId);
    console.log("clicked");
  };


  return (
    <>
    {is_bookmarked ? (
        <button
          className={`${prefixClass}__bookmarked`}
          onClick={removeBookMark}
        >
          <img
            className={`${prefixClass}__bookmark-icon`}
            src={bookMarkIcon}
            alt="bookmark icon"
          />
        </button>
      ) : (
        <button
          className={`${prefixClass}__book-btn`}
          onClick={handleBookmark}
        >
          <img
            className={`${prefixClass}__bookmark-icon`}
            src={bookMarkIcon}
            alt="bookmark icon"
          />
        </button>
      )}
      </>
  )
}

export default BookMarkButton