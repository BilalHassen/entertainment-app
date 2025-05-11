const express = require("express");
const app = express();
const cors = require("cors");

// allow requests from the front end
app.use(cors());

// automatically parse incoming JSON in the body of requests
app.use(express.json());

// get the route handlers
const videos = require("./routes/videos");
const movies = require("./routes/movies");
const tvShows = require("./routes/tv");
const bookmarks = require("./routes/bookmarks");
const user = require("./routes/user");

const requireAuth = require("./middleware/requireAuth");

// mount the videos functions to the /videos route
app.use("/videos", requireAuth, videos);

// mount the movies functions to the /movies route
app.use("/movies", requireAuth, movies);

// mount the tv functions to the /tv route
app.use("/tv", requireAuth, tvShows);

// mount the bookmark route handler functions to the /bookmark route
app.use("/bookmarks", requireAuth, bookmarks);

app.use("/user", user);

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the API"); // Sets status to 201 (Created)
});

app.listen(3000, () => {
  console.log("Welcome to the api", `Server running on http://localhost:${3000}`);
});
