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
            "success": "i kill you"
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
        // const name=await LmmStatic.findAll()
        // try{
        //     res.send(name)
        //     if(!name) return res.status(404).json({'fail':"not found"})
        // }catch(err){
        //     res.status(500).json({'fail':"not found"})
        // }
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
    }
}

// router.get('/', (req, res) => {
//     YourModel.find((err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(200).json(data);
//         }
//     });
// });
module.exports = LmmControl;
