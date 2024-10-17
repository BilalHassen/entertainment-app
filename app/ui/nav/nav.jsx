import Image from "next/image";
import "../../../styles/global.css";
export default function Nav() {
  return (
    <nav className="nav h-16 flex flex-row justify-between items-center px-4 bg-semiDarkBlue">
      <button>
        <Image
          className="movie-icon-img"
          src="/assets/logo.svg"
          alt="Movies App Logo"
          width={25} // Add width and height for optimized rendering
          height={20}
          objectFit="contain" // Ensure the image fits within 25x25 without distorting
        />
      </button>
      <div className="nav-image-container items-center flex gap-6">
        <button>
          <Image
            className="nav-home-icon"
            src="/assets/icon-nav-home.svg"
            alt="Home clickable icon"
            width={13.54} // Add width and height for optimized rendering
            height={16}
          />
        </button>
        <button>
          <Image
            className="nav-movie-icon"
            src="/assets/icon-nav-movies.svg"
            alt="Home clickable icon"
            width={13.54} // Add width and height for optimized rendering
            height={16}
          />
        </button>
        <button>
          <Image
            className="nav-tv-icon"
            src="/assets/icon-nav-tv-series.svg"
            alt="Home clickable icon"
            width={13.54} // Add width and height for optimized rendering
            height={16}
          />
        </button>
        <button>
          <Image
            className="nav-bookmark-icon"
            src="/assets/icon-nav-bookmark.svg"
            alt="Home clickable icon"
            width={13.54} // Add width and height for optimized rendering
            height={16}
          />
        </button>
      </div>
      <button>
        <Image
          className="nav-avatar"
          src="/assets/image-avatar.png"
          alt="Home clickable icon"
          width={25} // Add width and height for optimized rendering
          height={20}
          objectFit="contain" // Ensure the image fits within 25x25 without distorting
        ></Image>
      </button>
    </nav>
  );
}
