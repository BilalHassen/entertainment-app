import { useState } from "react";
import "./App.scss";
import { VideoProvider } from "./context/videoContext";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <VideoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/tv" element={<Home />} />
            <Route path="/movies" element={<Home />} />
            <Route path="/bookmarked" element={<Home />} />
          </Routes>
        </Router>
      </VideoProvider>
    </>
  );
}

export default App;
