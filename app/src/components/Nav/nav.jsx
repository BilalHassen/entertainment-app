import "./nav.scss";
import DynamicImage from "../DynamicImage/DynamicImage";

export default function () {
  return (
    <>
      <nav className="nav">
        <DynamicImage src="/assets/logo.svg" alt="main-logo" name="nav__logo" />
        <div className="nav__box">
          <DynamicImage
            src="/assets/icon-nav-home.svg"
            alt="main-logo"
            name="nav__home-icon"
          />
          <DynamicImage
            src="/assets/icon-nav-movies.svg"
            alt="icon for movies"
            name="nav__movies-icon"
          />
          <DynamicImage
            src="/assets/icon-nav-tv-series.svg"
            alt="icon for tv"
            name="nav__tv-icon"
          />
          <DynamicImage
            src="/assets/icon-nav-bookmark.svg"
            alt="icon for bookmarks"
            name="nav__bookmark-icon"
          />
        </div>

        <DynamicImage
          src="/assets/image-avatar.png"
          alt="icon for avatar"
          name="nav__avatar"
        />
      </nav>
    </>
  );
}
