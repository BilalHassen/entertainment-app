import "./nav.scss";
import DynamicImage from "../DynamicImage/DynamicImage";
import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import React from "react";

export default function () {
  const width = useWindowWidth();

  // react fragment is doesnt affect layout.
  const Wrapper = width >= 1366 ? "div" : React.Fragment;

  return (
    <nav className="nav">
      <Wrapper
        {...(Wrapper === "div" && { className: "nav__desktop-wrapper" })}
      >
        <DynamicImage src="/assets/logo.svg" alt="main-logo" name="nav__logo" />
        <div className="nav__box">
          <DynamicImage
            src="/assets/icon-nav-home.svg"
            alt="icon for home"
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
      </Wrapper>

      <DynamicImage
        src="/assets/image-avatar.png"
        alt="icon for avatar"
        name="nav__avatar"
      />
    </nav>
  );
}
