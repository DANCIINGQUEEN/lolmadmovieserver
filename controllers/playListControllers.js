const mongoose = require('mongoose')
const playList = mongoose.model('playList')



const playListControl = {
    holy: (req, res) => {
        res.json({
            "success": "i love yous"
        })
    },
    create: (req, res) => {
        // const data= {date: req.body.date, videos: videos}
        // playList.create({
        //     date:req.body.date,
        //     video:{
        //         title:req.body.title,
        //         link:req.body.link
        //     }
        // },(err)=>{
        //     if(err)res.status(400).json(err)
        //     else{
        //         res.status(201).json({message:'create schema success'})
        //     }
        // })
        const data = new playList(req.body);
        // Save the data to the database
        data.save((error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.send('Data saved successfully!');
            }
        });
    },
    getAll: (req, res) => {
        playList.find((err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).json(data)
                }
            },
            {}
        ).sort({_id:-1})
    },
    getOne:(req,res)=>{
        playList.find((err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json(data)
            }
        },
        {}
    ).sort({_id:-1}).limit(1)
    }
}

module.exports = playListControl