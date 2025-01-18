import React from "react";
import Nav from "@components/Nav/nav";
import Trending from "@components/Trending/Trending";
import VideoContainer from "@components/VideoContainer/VideoContainer";
import "./Home.scss";

function Home() {
  return (
    <div className="home-wrapper">
      <Nav />
      <div className="content-wrapper">
        <Trending />
        <VideoContainer />
      </div>
    </div>
  );
}

export default Home;
