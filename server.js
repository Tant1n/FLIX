require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db.js")

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const moviesRoutes = require('./routes/moviesRoutes')
const usersRoutes = require('./routes/usersRoutes')

app.use("/movies", moviesRoutes)
app.use("/", usersRoutes)
app.use("/createMovie", moviesRoutes)

async function startServer() {
    await connectDB() 

    app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`)
    })
}

startServer()