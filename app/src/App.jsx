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
import { TokenProvider } from "./context/TokenContext";
// TanStack Query setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Place outside of the app component  so QueryClient is only created once
const queryClient = new QueryClient();

function App() {
  const { user } = useAuthContext();

  return (
    //  Wrap everything inside QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <TokenProvider>
        <VideoProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={!user ? <SignUp /> : <Navigate to="/home" />}
              />
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
              <Route path="*" element={<Navigate to="/signup" />} />
            </Routes>
          </Router>
        </VideoProvider>
      </TokenProvider>
    </QueryClientProvider>
  );
}

export default App;
