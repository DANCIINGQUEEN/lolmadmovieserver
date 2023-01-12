const mongoose = require('mongoose')

// const titleAndLinkSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     links: {type: String, required: true}
// })
// const dateSchema = new mongoose.Schema({
//     date: {type: String, required: true},
//     titleAndLink: [titleAndLinkSchema]
// })
//
//
// const lolSchema = new mongoose.Schema({
//     ARAM: [dateSchema]
// })
//
const lolMadMovieSchema = new mongoose.Schema({
    date: {type: String, required: true},
    name: {type: String, required: true}
})
// lolSchema.statics.findAll=function(){
//     return this.find({})
// }
mongoose.model('LolMadMovie', lolMadMovieSchema)

