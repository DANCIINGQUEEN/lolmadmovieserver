const mongoose = require('mongoose')

const chatSchema=new mongoose.Schema({
    message:{type:String},
    channel:{type:String},
    date:{type:Date, default:Date.now}
})
module.exports=mongoose.model('chat', chatSchema)