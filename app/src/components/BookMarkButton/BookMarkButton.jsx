import React, { useEffect } from 'react'
import { useState } from 'react';
import { useBookMark } from "../../hooks/useBookMark";

function BookMarkButton({is_bookmarked, bookMarkIcon, prefixClass, videoId, videoCategory, bookmarkPage = false }) {

    const [isBookmarkPage, setIsBookmarkPage] = useState(false)
  

  const { addBookMark, deleteBookMarkVideo } = useBookMark();
  const handleBookmark = async () => {
    await addBookMark(videoId, videoCategory);
  };

  const removeBookMark = async () => {
    await deleteBookMarkVideo(videoId, videoCategory);
    console.log("clicked");
  };


// isFilled will be a boolean value the one which video is bookmarked
  const isFilled = bookmarkPage || is_bookmarked 

  // ff it's filled click remove it. Otherwise, it will add the bookmark.
  const handleClick = isFilled ? removeBookMark : handleBookmark

  const buttonClass = `${prefixClass}__${
    isFilled ? "bookmarked" : "book-btn"
  }`;

  return (
    <>
     <button
    className={buttonClass}
    onClick={handleClick}
  >
    <img
      className={`${prefixClass}__bookmark-icon`}
      src={bookMarkIcon}
      alt="bookmark icon"
    />
  </button>
      </>
  )
}

export default BookMarkButton