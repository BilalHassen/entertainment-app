import { useState } from "react";
import "./App.scss";
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
