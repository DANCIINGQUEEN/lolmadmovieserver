const mongoose = require('mongoose')
const lolMadMovie = mongoose.model('LolMadMovie')


const LmmControl = {
    hello: (req, res) => {
        res.json({
            "success": "i love you"
        })
    },
    getAll: (req, res) => {
        lolMadMovie.find((err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).json(data)
                }
            }
        )
    },
    create:(req,res)=>{
        lolMadMovie.create({
            date:req.body.date,
            name:req.body.name
        },(err)=>{
            if(err)res.status(400).json(err)
            else{
                res.status(201).json({message:'create schema success'})
            }
        })
    },
    delete:async (req,res)=>{
        try{
            const id=req.params.id
            const deleted=await lolMadMovie.findByIdAndDelete({_id:id})
            if(deleted){
                return res.status(200).json({message:'Deleted Successfully', deleted})
            }else{
                return res.status(404).json({message:'not found', id:id})
            }
        }catch(err){
            return res.status(500).json({message:'error'}, err)
        }
    }
}


module.exports = LmmControl;
