import React from "react";
import "./RecommendedVideosCard.scss";
import emptyBookMark from "../../../public/assets/icon-bookmark-empty.svg";
import movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";
import "./RecommendedVideosCard.scss";

function RecommendedVideosCard({
  category,
  id,
  is_bookmarked,
  is_recommended,
  rating,
  title,
  url,
  year,
}) {
  return (
    <>
      <div className="recommendedVideos__card">
        <div
          className="recommendedVideos__thumbnail"
          style={{
            backgroundImage: `url(${url[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="recommendedVideos__book-btn">
            <img
              className="recommendedVideos__bookmark-icon"
              src={emptyBookMark}
              alt="bookmark icon"
            />
          </button>
        </div>
        <div className="recommendedVideos__content">
          <div className="recommendedVideos__text-content">
            <div className="recommendedVideos__flex-wrapper">
              <div className="recommendedVideos__type-box">
                <p className="recommendedVideos__year">{year} </p>
                {"."}
                <img
                  className="recommendedVideos__category-icon"
                  src={category === "Movie" ? movie : tv}
                />
                <p className="recommendedVideos__category">{category}</p>
                <div className="recommendedVideos__rating-box">
                  <p className="recommendedVideos__rating">{rating}</p>
                </div>
              </div>
              <h3 className="recommendedVideos__title">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendedVideosCard;
