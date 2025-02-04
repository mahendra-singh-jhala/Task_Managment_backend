const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        default: "No Description"
    },

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },

    dueDate: {
      type: Date,
      default: Date.now(),
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low"
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
}, {timestamps: true})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;