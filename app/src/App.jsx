import { useState } from "react";

import "./App.scss";
import Nav from "./components/Nav/nav";
function App() {
  return (
    <>
      <div className="app-wrapper">
        <Nav />
        <div className="flex-child">
          <h1>hello world</h1>
        </div>
      </div>
    </>
  );
}

export default App;
