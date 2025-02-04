const User = require("../models/userModel")

// Controller function for get user by ID
exports.getUserById = async (req, res) => {
    const userId = req.user._id
    try {
        const user = await User.findOne({ _id: userId })
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        res.status(200).json({
            message: "User get successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error. Please try again later'
        });
    }
}