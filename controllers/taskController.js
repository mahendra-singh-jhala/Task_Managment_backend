const Task = require("../models/taskModel")
const User = require("../models/userModel")

exports.createTask = async (req, res) => {
    const { title, description, dueDate, status, priority } = req.body
    const userId = req.user._id
    try {
        const user = await User.findOne({ _id: userId })
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        const task = new Task({
            title,
            description,
            status,
            dueDate,
            priority,
            user: userId
        })
        await task.save();

        res.status(200).json({
            message: "Task Create Successfully",
            task
        })
    } catch (error) {
        res.status(500).json({
            message: "Error: to Create Task",
            error: error.message
        })
    }
}

exports.getTask = async (req, res) => {
    const userId = req.user._id
    try {
        const task = await Task.find({ user: userId }).populate("user")
        if (!task) {
            return res.status(404).json({
                message: "task not found"
            })
        }

        res.status(200).json({
            message: "task get successfully",
            task
        });
    } catch (error) {
        res.status(500).json({
            message: "Error: to Find user Task",
            error: error.message
        })
    }
}

exports.updateTask = async (req, res) => {
    const { id, taskData } = req.body
    const userId = req.user._id
    try {
        const updateTask = await Task.findByIdAndUpdate({ _id: id, user: userId, }, taskData, { new: true })
        if(!updateTask) {
            return res.status(404).json({
                message: "task not found"
            })
        }

        res.status(200).json({
            message: "Task Update Successfully",
            updateTask
        })
    } catch (error) {
        res.status(500).json({
            message: "Error: to update user Task",
            error: error.message
        })
    }
}

exports.deleteTask = async (req, res) => {
    const { id } = req.body
    try {
        const deleteTask = await Task.findByIdAndDelete({ _id: id })
        if(!deleteTask) {
            return res.status(404).json({
                message: "task not found"
            })
        }

        res.status(200).json({
            message: "Task delete successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error: to delete user Task",
            error: error.message
        })
    }
}