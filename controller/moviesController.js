const Movie = require("../models/movies.js")
const mongoose = require("mongoose")

async function getMovies(req, res) {
    try {
        const { name, rating, years, genres, ageRating, type } = req.query

        const filters = {};

        if (name !== undefined) {
            filters.name = name
        }
        if (rating !== undefined) {
            filters.rating = Number(rating)
        }
        if (years !== undefined) {
            filters.years = Number(years)
        }
        if (genres !== undefined) {
            filters.genres = genres
        }
        if (ageRating !== undefined) {
            filters.ageRating = Number(ageRating)
        }
        if (type !== undefined) {
            filters.type = type
        }

        const result = await Movie.find(filters)

        res.json(result)
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка сервера',
            error: error
        })
    }

}

async function getMoviesById(req, res) {
    try {
        const movie = await Movie.findById(req.params.id)
        if (!movie) {
            return res.status(404).json({
                message: "Фильм не найден",
                error: error

            })
        }
        res.json(movie)
    } catch (error) {
        res.status(500).json({
            message: "Фильм не найден",
            error: error
        })
    }
}

async function postMovies(req, res) {
    const { name, director, genres, years, posterURL, teaserURL, country, image, rating, type, description, ageRating, episodes } = req.body
 
    try {
        await Movie.create({
            name: name,
            director: director,
            genres: genres,
            years: years,
            posterURL: posterURL,
            teaserURL: teaserURL,
            country: country,
            image: image,
            rating: rating,
            type: type,
            description: description,
            ageRating: ageRating,
            episodes: episodes
        });

        res.json("Фильм добавлен")
    } catch (err) {
        res.status(500).json(`Ошибка! ${err}`)
    }
}

module.exports = {
    getMovies,
    getMoviesById,
    postMovies
}