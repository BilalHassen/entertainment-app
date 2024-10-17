"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../../../styles/global.css";

export default function Nav() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check the screen size and set the `isLargeScreen` state accordingly
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // 1024px is Tailwind's lg breakpoint
    // callback function be called by the event listener
    const handleResize = () => {
      setIsLargeScreen(mediaQuery.matches);
      console.log(mediaQuery);
    };

    handleResize(); // Initial check on mount
    // pass the callback function to be called whenevr the screen size changes
    mediaQuery.addEventListener("change", handleResize); // Listen for screen size changes

    return () => mediaQuery.removeEventListener("change", handleResize); // Clean up event listener
  }, []);

  return (
    <nav
      className="nav h-16 flex flex-row justify-between items-center px-4
     bg-semiDarkBlue md:m-4 rounded-md 
     lg:flex-col lg:py-4 lg:mb-4 lg:h-auto"
    >
      {/* Conditionally render the wrapper only on large screens */}
      {isLargeScreen ? (
        <div className="lg:flex lg:flex-col lg:items-center lg:gap-12">
          {/* The contents inside the wrapper */}
          <button>
            <Image
              className="movie-icon-img md:w-11 md:h-10"
              src="/assets/logo.svg"
              alt="Movies App Logo"
              width={25}
              height={20}
              objectFit="contain"
            />
          </button>
          <div className="nav-image-container items-center flex gap-6 lg:flex-col">
            <button>
              <Image
                className="nav-home-icon md:w-5 md:h-5"
                src="/assets/icon-nav-home.svg"
                alt="Home clickable icon"
                width={13.54}
                height={16}
              />
            </button>
            <button>
              <Image
                className="nav-movie-icon md:w-5 md:h-5"
                src="/assets/icon-nav-movies.svg"
                alt="Movies clickable icon"
                width={13.54}
                height={16}
              />
            </button>
            <button>
              <Image
                className="nav-tv-icon md:w-5 md:h-5"
                src="/assets/icon-nav-tv-series.svg"
                alt="TV clickable icon"
                width={13.54}
                height={16}
              />
            </button>
            <button>
              <Image
                className="nav-bookmark-icon md:w-5 md:h-5"
                src="/assets/icon-nav-bookmark.svg"
                alt="Bookmark clickable icon"
                width={13.54}
                height={16}
              />
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Directly render the same contents without the wrapper on smaller screens */}
          <button>
            <Image
              className="movie-icon-img md:w-11 md:h-10"
              src="/assets/logo.svg"
              alt="Movies App Logo"
              width={25}
              height={20}
              objectFit="contain"
            />
          </button>
          <div className="nav-image-container items-center flex gap-6 lg:flex-col">
            <button>
              <Image
                className="nav-home-icon md:w-5 md:h-5"
                src="/assets/icon-nav-home.svg"
                alt="Home clickable icon"
                width={13.54}
                height={16}
              />
            </button>
            <button>
              <Image
                className="nav-movie-icon md:w-5 md:h-5"
                src="/assets/icon-nav-movies.svg"
                alt="Movies clickable icon"
                width={13.54}
                height={16}
              />
            </button>
            <button>
              <Image
                className="nav-tv-icon md:w-5 md:h-5"
                src="/assets/icon-nav-tv-series.svg"
                alt="TV clickable icon"
                width={13.54}
                height={16}
              />
            </button>
            <button>
              <Image
                className="nav-bookmark-icon md:w-5 md:h-5"
                src="/assets/icon-nav-bookmark.svg"
                alt="Bookmark clickable icon"
                width={13.54}
                height={16}
              />
            </button>
          </div>
        </>
      )}

      <button>
        <Image
          className="nav-avatar md:w-10 md:h-10"
          src="/assets/image-avatar.png"
          alt="Avatar clickable icon"
          width={25}
          height={20}
          objectFit="contain"
        />
      </button>
    </nav>
  );
}
