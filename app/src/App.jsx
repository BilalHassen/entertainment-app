import { useState } from "react";
import "./App.scss";
import { VideoProvider } from "./context/videoContext";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookMarks from "./Pages/BookMarks/BookMarks";
import Tv from "./Pages/Tv/Tv";
import Movies from "./Pages/Movies/Movies";
import Auth from "./Pages/Auth/Auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <VideoProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/tv" element={<Tv />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/bookmarks" element={<BookMarks />} />
            </Routes>
          </Router>
        </VideoProvider>
      ) : (
        <div className="auth-wrapper">
          <Auth />
        </div>
      )}
    </>
  );
}

export default App;
