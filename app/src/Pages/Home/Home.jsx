import React, { useEffect } from "react";
import { useState } from "react";
import Nav from "@components/Nav/nav";
import Trending from "@components/Trending/Trending";
import VideoContainer from "@components/VideoContainer/VideoContainer";
import LayOut from "@components/LayOut/LayOut";
import { useVideosContext } from "../../context/videoContext";
import "./Home.scss";

function Home() {
  const { recommendedVideos } = useVideosContext();

  // useEffect(()=>{
  //   console.log(recommendedVideos)
  // },[recommendedVideos])



  return (
    <>
      <LayOut>
        {/*trending and videocontainer are slotted in content-wrapper
        as children
        */}
        <Trending />
        <VideoContainer data={recommendedVideos} title="Recommended for you" />
      </LayOut>
    </>
  );
}

export default Home;
