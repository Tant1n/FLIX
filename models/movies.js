const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
        name: String,
        director: String,
        genres: [String],
        years: Number,
        posterURL: String,
        teaserURL: String,
        country: String,
        image: String,

        rating: Number,
        type: String,
        description: String,
        ageRating: String,
        episodes: [String] 
})


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie