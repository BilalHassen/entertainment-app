import React from "react";
import DynamicImage from "../DynamicImage/DynamicImage";
import "./TrendingVideoCard.scss";
import emptyBookMark from "../../../public/assets/icon-bookmark-empty.svg";
import movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";
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

  console.log(bookmarked)
  const { addBookMark } = useBookMark();
  const handleBookmark = async () => {
    await addBookMark(id);
  };

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
        <button className={bookmarked ? "trendingVideos__bookmarked": "trendingVideos__book-btn" } onClick={handleBookmark}>
          <img
            className="trendingVideos__bookmark-icon"
            src={emptyBookMark}
            alt="bookmark icon"
          />
        </button>
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
