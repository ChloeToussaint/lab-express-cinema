const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({

    title: String,
    director: String,
    stars: array,
    image: string,
    description: string,
    showtimes: array,
})

const movieModel = mongoose.model ('Movie', moviesSchema)

module.exportss = movieModel