const express = require("express")
const taskController = require("../controllers/taskController")
const { signin } = require("../middleware/authmiddleware")

const router = express.Router();

// This route handles POST requests for create task
router.post("/create", signin, taskController.createTask)

// This route handles GET requests for get user task
router.get("/", signin, taskController.getTask)

// This route handles PUT requests for update task
router.put("/updateTask", signin, taskController.updateTask)

// This route handles DELETE requests for delete task
router.delete("/deleteTask", signin, taskController.deleteTask)

module.exports = router