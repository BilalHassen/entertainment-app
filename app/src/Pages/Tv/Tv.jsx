import React from "react";
import LayOut from "@components/LayOut/LayOut";
import { useVideosContext } from "../../context/videoContext";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
function Tv() {
  const { tvShows } = useVideosContext();
  return (
    <LayOut>
      <VideoContainer data={tvShows} title={"TV Series"} />
    </LayOut>
  );
}

export default Tv;
