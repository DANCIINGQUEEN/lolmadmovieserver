const mongoose = require('mongoose')


const lolMadMovieSchema = new mongoose.Schema({
    date: {type: String, required: true},
    name: {type: String, required: true}
})

mongoose.model('LolMadMovie', lolMadMovieSchema)

