const mongoose = require('mongoose')

const playListSchema = new mongoose.Schema({
    date: {type: String, required: true},
    video: [{
        title:{type:String, required: true},
        link:{type:String, required:true}
    }]
})

mongoose.model('playList', playListSchema)


