// Importing the global CSS file to apply styles throughout the entire application.
import "../styles/global.css";
// Importing the Outfit font from Google Fonts with Next.js
import { Outfit } from "@next/font/google";
// Importing React to create functional components.
import React from "react";

// This object defines metadata for the application, such as the title and description.
export const metadata = {
  title: "Movies App", // The title of the app, displayed in the browser tab or window title.
  description: "Discover & organize your favourite movies and videos", // A brief description of the app.
};

// Corrected font import with the Outfit font
const outfitFont = Outfit({
  weight: ["200", "300", "400"],
  subsets: ["latin"], // Make sure to specify the subset
});

// The main layout component for the entire application.
const RootLayout = ({ children }) => {
  // The RootLayout component is using the 'children' prop.
  // This prop will contain the content (components) passed to RootLayout when used elsewhere in the app.

  return (
    <html lang="en">
      {/* Declaring the language for the document to be English */}
      <body className={outfitFont.className}>
        {/* This is a container for the main layout styles */}
        <div className="main">
          {/* This div is styled with a class 'gradient', which likely adds a gradient background */}
          <div className="background" />
        </div>
        {/* The <main> tag is semantically used for the main content of the page. */}
        {/* The 'children' prop will be rendered here, representing the content of each page */}
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

// Exporting the RootLayout component as the default export of this module
export default RootLayout;
