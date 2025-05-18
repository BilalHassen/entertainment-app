import React from 'react';
import { useBookmarksQuery } from '../../hooks/useBookmarksQuery';
import { useToggleBookmark } from '../../hooks/useToggleBookmark';
import { useAuthContext } from '../../hooks/useAuthContext';

function BookMarkButton({ bookMarkIcon, prefixClass, videoId, bookmarkPage = false }) {
  const { user } = useAuthContext();
  const token = user?.token;

  


  const { data: bookmarks, isLoading } = useBookmarksQuery(token);
  const { addMutation, deleteMutation } = useToggleBookmark(token);

  if (isLoading) return null; // or a loading spinner

  // Check if this video is bookmarked
  const isFilled = bookmarkPage || bookmarks?.some((item) => item.id === videoId);

  // Bookmark or unbookmark the video
  const handleClick = () => {
    if (isFilled) {
      deleteMutation.mutate(videoId);
    } else {
      addMutation.mutate(videoId);
    }
  };


  

  const buttonClass = `${prefixClass}__${isFilled ? 'bookmarked' : 'book-btn'}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      <img
        className={`${prefixClass}__bookmark-icon`}
        src={bookMarkIcon}
        alt="bookmark icon"
      />
    </button>
  );
}

export default BookMarkButton;
