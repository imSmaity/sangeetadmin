const express=require('express')
const Model = require('../../models/musicDataSchema/music_data')
const route=express.Router()

route.get('/', async (req,res)=>{
    const findData={}

    const new_song=await Model("new_song").find({})
    const old_song=await Model("old_song").find({})

    findData.new_songs=new_song
    findData.old_songs=old_song

    res.setHeader('Content-type','application/json')
    res.end(JSON.stringify(findData,null,3))

})

module.exports=route
