// create an isolated instance of a router
// allows to create routes that are mountable to a specific url path
const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/").post(userController.HandleUserSignUp);

// use node module to export the route
module.exports = router;
