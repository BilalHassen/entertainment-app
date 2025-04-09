// create an isolated instance of a router
// allows to create routes that are mountable to a specific url path
const router = require("express").Router();
const bookmarksController = require("../controllers/bookmarksController");

// home route will call the getTrendingVideos function
// when the route is hit
router.route("/").get(bookmarksController.getBookmarkVideos);
router.route("/").post(bookmarksController.bookMarkVideo);
router.route("/").delete(bookmarksController.deleteBookMarkVideo)
// use node module to export the route
module.exports = router;
