import { useState } from "react";
import "./App.scss";
import { VideoProvider } from "./context/videoContext";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import BookMarks from "./Pages/BookMarks/BookMarks";
import Tv from "./Pages/Tv/Tv";
import Movies from "./Pages/Movies/Movies";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <VideoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/tv" element={<Tv />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/bookmarks" element={<BookMarks />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </VideoProvider>
    </>
  );
}

export default App;
