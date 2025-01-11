// create an isolated instance of a router
// allows to create routes that are mountable to a specific url path
const router = require("express").Router();
const userController = require("../controllers/moviesController");

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

// home route will call the getTrendingVideos function
// when the route is hit
router.route("/").get(userController.getTrendingVideos);

// use node module to export the route
module.exports = router;
