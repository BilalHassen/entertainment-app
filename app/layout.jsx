// Importing the global CSS file to apply styles throughout the entire application.
import "../styles/global.css";

// Importing React to create functional components.
import React from "react";

// This object defines metadata for the application, such as the title and description.
// It could be used in Next.js to set HTML head elements dynamically.
export const metadata = {
  title: "Movies App", // The title of the app, displayed in the browser tab or window title.
  description: "Discover & organize your favourite movies and videos", // A brief description of the app.
};

// The main layout component for the entire application.
// This component wraps all pages in a consistent layout.
const RootLayout = ({ children }) => {
  // The RootLayout component is using the 'children' prop. This prop will contain the content (components)
  // that are passed to RootLayout when it is used in other parts of the app, effectively rendering the page contents within this layout.

  return (
    <html lang="en">
      {" "}
      {/* Declaring the language for the document to be English */}
      <body>
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
