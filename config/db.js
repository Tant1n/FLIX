require("dotenv").config()

const mongoose = require("mongoose")

async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB подключен")
    } catch (error) {
        console.log(`Ошибка подключения к MongoDB. error: ${error}`)
    }
}

module.exports = connectDB