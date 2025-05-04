import React from "react";
import DynamicImage from "../DynamicImage/DynamicImage";
import "./TrendingVideoCard.scss";
import emptyBookMark from "../../../public/assets/icon-bookmark-empty.svg";
import movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";
import  {useState, useEffect} from "react"
import { useBookMark } from "../../hooks/useBookMark";

function TrendingVideoCard({
  category,
  bookmarked,
  trending,
  rating,
  title,
  url,
  year,
  id,
}) {

  
  // state for when a video is bookmarked
  // take this logic and put in a resuable component with the jsx structure below under the comments
  const [isBookmarked, setBookmark] = useState(false);

  const { addBookMark, deleteBookMarkVideo } = useBookMark();
  const handleBookmark = async () => {
    await addBookMark(id);
  };

  const removeBookMark = async () => {
    await deleteBookMarkVideo(id);
    console.log("clicked");
  };

  useEffect(() => {
    if (bookmarked) {
      setBookmark(true);
    }
  }, []);

  return (
    <div
      className="trendingVideos__card"
      style={{
        backgroundImage: `url(${url[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="trendingVideos__content">
        {/*take this button structure and make a component */}
      {bookmarked ? (
  <button
    className="trendingVideos__bookmarked"
    onClick={removeBookMark}
  >
    <img
      className="trendingVideos__bookmark-icon"
      src={emptyBookMark}
      alt="bookmark icon"
    />
  </button>
) : (
  <button
    className="trendingVideos__book-btn"
    onClick={handleBookmark}
  >
    <img
      className="trendingVideos__bookmark-icon"
      src={emptyBookMark}
      alt="bookmark icon"
    />
  </button>
)}

        <div className="trendingVideos__text-content">
          <div className="trendingVideos__flex-wrapper">
            <div className="trendingVideos__type-box">
              <p className="trendingVideos__year">{year} </p>
              {"."}
              <img
                className="trendingVideos__category-icon"
                src={category === "Movie" ? movie : tv}
              />
              <p className="trendingVideos__category">{category}</p>
            </div>
            <h3 className="trendingVideos__title">{title}</h3>
          </div>
          <div className="trendingVideos__rating-box">
            <p className="trendingVideos__rating">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingVideoCard;
