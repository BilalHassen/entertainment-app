const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// get the route handlers
const videos = require("./routes/videos");
const movies = require("./routes/movies");

// mount the videos functions to the /videos route
app.use("/videos", videos);

// mount the videos functions to the /videos route
app.use("/movies", movies);

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the API"); // Sets status to 201 (Created)
});

app.listen(3000, () => {
  console.log("Welcome to the api");
});
