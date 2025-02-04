const express = require("express")
const userController = require("../controllers/userController")
const { signin } = require("../middleware/authmiddleware")

const router = express.Router();

// This route handles GET requests for user profile
router.get("/user", signin , userController.getUserById)

module.exports = router