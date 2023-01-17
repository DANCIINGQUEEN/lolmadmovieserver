const mongoose = require('mongoose')

const memoSchema=new mongoose.Schema({
    title: {type: String, required: true},
    content:{type:String, required:true}
})

mongoose.model('memo', memoSchema)