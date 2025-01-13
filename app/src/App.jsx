import { useState } from "react";
import Trending from "./components/Trending/Trending";
import "./App.scss";
import Nav from "./components/Nav/nav";
import { VideoProvider } from "./context/videoContext";
function App() {
  return (
    <>
      <VideoProvider>
        <div className="app-wrapper">
          <Nav />
          <Trending />
        </div>
      </VideoProvider>
    </>
  );
}

export default App;
