import React from "react";
import { useVideosContext } from "../../context/videoContext";
function Movies() {
  const { movies } = useVideosContext(); // Access the context
  console.log(movies);

  return (
    <div>
      <h1>Movies Page</h1>
    </div>
  );
}

export default Movies;
