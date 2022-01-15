const express=require('express')
const Model = require('../../models/musicDataSchema/music_data')
const route=express.Router()

route.post('/', async (req,res)=>{

    const ID=req.body.id
    const SONG_TYPE=req.body.sType
    const findSong=await Model(SONG_TYPE).findById(ID).exec()

    res.send(findSong)
})

module.exports=route
