import React from "react";
import Nav from "../../components/Nav/nav";
import Trending from "../../components/Trending/Trending";

import "./Home.scss";

function Home() {
  return (
    <div className="home-wrapper">
      <Nav />
      <div className="content-wrapper">
        <Trending />
      </div>
    </div>
  );
}

export default Home;
