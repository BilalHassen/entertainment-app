import React, { useEffect } from "react";
import emptyBookMark from "../../../public/assets/icon-bookmark-empty.svg";
import movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";
import "./VideoCard.scss";

import { useBookMark } from "../../hooks/useBookMark";

function VideoCard({
  category,
  id,
  is_bookmarked,
  is_recommended,
  rating,
  title,
  url,
  year,
}) {
  const { addBookMark } = useBookMark();
  const handleBookmark = async () => {
    await addBookMark(id);
  };

  return (
    <>
      <div className="videoContainer__card">
        <div
          className="videoContainer__thumbnail"
          style={{
            backgroundImage: `url(${url[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="videoContainer__book-btn" onClick={handleBookmark}>
            <img
              className="videoContainer__bookmark-icon"
              src={emptyBookMark}
              alt="bookmark icon"
            />
          </button>
        </div>
        <div className="videoContainer__content">
          <div className="videoContainer__text-content">
            <div className="videoContainer__flex-wrapper">
              <div className="videoContainer__type-box">
                <p className="videoContainer__year">{year} </p>
                {"."}
                <img
                  className="videoContainer__category-icon"
                  src={category === "Movie" ? movie : tv}
                />
                <p className="videoContainer__category">{category}</p>
                <div className="videoContainer__rating-box">
                  <p className="videoContainer__rating">{rating}</p>
                </div>
              </div>
              <h3 className="videoContainer__title">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
