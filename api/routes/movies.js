// create an isolated instance of a router
// allows to create routes that are mountable to a specific url path
const router = require("express").Router();
const moviesController = require("../controllers/moviesController");

// home route will call the getTrendingVideos function
// when the route is hit
router.route("/").get(moviesController.getMovies);

// use node module to export the route
module.exports = router;
