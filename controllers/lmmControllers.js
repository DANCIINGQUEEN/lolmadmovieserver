const mongoose = require('mongoose')
const Lmm = mongoose.model('LolMadMovie')
const Lmm2 = require('../models/db.js')


const LmmControl = {
    hello: (req, res) => {
        res.json({
            "success": "i love you"
        })
    },
    fuckYou: (req, res) => {
        res.status(200).json({
            "success": "i see you"
        })
    },
    kill: (req, res) => {
        res.render('index', {title: 'home sweet home'})
    },
    hi: (req, res) => {
        res.json({
            "success": "hi"
        })
    },
    ho: (rea, res) => {
        res.json({
            "success": "ho"
        })
    },
    getAll: (req, res) => {
        Lmm.find((err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).json(data)
                }
            }
        )
    },
    create:(req,res)=>{
        Lmm.create({
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
            // const id=mongoose.Types.ObjectId(req.params.id)
            const id=req.params.id
            // console.log(req.params.id)
            const deleted=await Lmm.findByIdAndDelete({_id:id})
            if(deleted){
                return res.status(200).json({message:'Deleted Successfully', deleted})
            }else{
                return res.status(404).json({message:'not found', id:id})
            }
        }catch(err){
            return res.status(500).json({message:'error'}, err)
        }

    },
    sex:(req,res)=>{
        const id=req.query.id
        res.json({id})
    }
}


module.exports = LmmControl;
