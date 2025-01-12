import { useState } from "react";
import Trending from "./components/Trending/Trending";
import "./App.scss";
import Nav from "./components/Nav/nav";
function App() {
  return (
    <>
      <div className="app-wrapper">
        <Nav />
        <Trending />
      </div>
    </>
  );
}

export default App;
