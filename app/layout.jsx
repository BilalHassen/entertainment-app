import Head from "next/head";
import "../styles/global.css";
import { Outfit } from "@next/font/google";
import React from "react";
import Nav from "./ui/nav/nav.jsx";

// Corrected font import with the Outfit font
const outfitFont = Outfit({
  weight: ["200", "300", "400"],
  subsets: ["latin"], // Make sure to specify the subset
});

// The main layout component for the entire application.
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        {/* Adding the viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movies App</title>
        <meta
          name="description"
          content="Discover & organize your favourite movies and videos"
        />
      </Head>
      {/* Declaring the language for the document to be English */}
      <body className={`${outfitFont.className} bg-darkBlue h-lvh lg:flex`}>
        {/* This is a container for the main layout styles */}
        <Nav />
        {/* The <main> tag is semantically used for the main content of the page. */}
        {/* The 'children' prop will be rendered here, representing the content of each page */}
        <main className="app px-4 lg:lvh lg:my-4">{children}</main>
      </body>
    </html>
  );
};

// Exporting the RootLayout component as the default export of this module
export default RootLayout;
