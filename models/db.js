const mongoose = require('mongoose')


// const lolMadMovieSchema = new mongoose.Schema({
//     date: {type: String, required: true},
//     name: {type: String, required: true}
// })
//
// mongoose.model('LolMadMovie', lolMadMovieSchema)

const titleAndContentSchema=new mongoose.Schema({
    title: {type: String, required: true},
    content:{type:String, required:true}
})

mongoose.model('titleAndContent', titleAndContentSchema)