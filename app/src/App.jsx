import { useState } from "react";
import "./App.scss";
import { VideoProvider } from "./context/videoContext";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import BookMarks from "./Pages/BookMarks/BookMarks";
import Tv from "./Pages/Tv/Tv";
import Movies from "./Pages/Movies/Movies";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
// import LogOut from "./components/LogOut/LogOut";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <VideoProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={!user ? <SignUp /> : <Navigate to="/home" />}
            />{" "}
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/signin" />}
            />
            <Route path="/tv" element={<Tv />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/bookmarks" element={<BookMarks />} />
            <Route
              path="/signin"
              element={!user ? <SignIn /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
      </VideoProvider>
    </>
  );
}

export default App;
