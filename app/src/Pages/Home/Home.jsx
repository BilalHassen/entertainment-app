import React from "react";
import Nav from "@components/Nav/nav";
import Trending from "@components/Trending/Trending";
import VideoContainer from "@components/VideoContainer/VideoContainer";
import LayOut from "@components/LayOut/LayOut";
import "./Home.scss";

function Home() {
  return (
    <LayOut>
      <Trending />
      <VideoContainer />
    </LayOut>
  );
}

export default Home;
