const mongoose = require('mongoose')
const chat = mongoose.model('chat')


const chatControl={
    hi:(req,res)=>{
        res.json({message:'hello~'})
    },

}

module.exports =chatControl