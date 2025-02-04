const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectdb = require("./config/db")
const authRouter = require("./routes/authRoutes")
const userRouter = require("./routes/userRoutes")
const taskRouter = require("./routes/taskRouter")

// load enviorment variable
require('dotenv').config();

const app = express()

// Connect mongodb
connectdb();

// middleware
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

// routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})