// create an isolated instance of a router
// allows to create routes that are mountable to a specific url path
const router = require("express").Router();
const videosController = require("../controllers/videosController");

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

// home route will call the getTrendingVideos function
// when the route is hit
router.route("/trending-videos").get(videosController.getTrendingVideos);
router.route("/recommended-videos").get(videosController.getRecommendedVideos);
// use node module to export the route
module.exports = router;
