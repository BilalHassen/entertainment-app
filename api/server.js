const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// get the route handlers
const videos = require("./routes/videos");
const movies = require("./routes/movies");
const tvShows = require("./routes/tv");
const bookmarks = require("./routes/bookmarks");

// mount the videos functions to the /videos route
app.use("/videos", videos);

// mount the movies functions to the /movies route
app.use("/movies", movies);

// mount the tv functions to the /tv route
app.use("/tv", tvShows);

// mount the bookmark route handler functions to the /bookmark route
app.use("/bookmarks", bookmarks);

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the API"); // Sets status to 201 (Created)
});

app.listen(3000, () => {
  console.log("Welcome to the api");
});
