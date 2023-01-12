// const mongoose = require('mongoose')
//
//
// const lolMadMovieSchema = new mongoose.Schema({
//     date: {type: String, required: true},
//     name: {type: String, required: true}
// })
// // lolSchema.statics.findAll=function(){
// //     return this.find({})
// // }
// mongoose.model('LolMadMovie', lolMadMovieSchema)
//


const mongoose = require('mongoose')

// const videoSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     link: {type: String, required: true}
// })
const playListSchema = new mongoose.Schema({
    date: {type: String, required: true},
    video: [{
        title:{type:String, required: true},
        link:{type:String, required:true}
    }]
})

mongoose.model('playList', playListSchema)


