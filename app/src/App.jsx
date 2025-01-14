import { useState } from "react";
import Trending from "./components/Trending/Trending";
import "./App.scss";
import Nav from "./components/Nav/nav";
import { VideoProvider } from "./context/videoContext";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <VideoProvider>
        <Home />
      </VideoProvider>
    </>
  );
}

export default App;
