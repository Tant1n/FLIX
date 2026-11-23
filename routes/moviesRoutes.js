const express = require("express")

const {
    getMovies,
    getMoviesById,
    postMovies
} = require("../controller/moviesController")




const router = express.Router()


router.get("/", getMovies)
router.get("/:id", getMoviesById)
router.post("/", postMovies)



module.exports = router