const express=require('express')
const Model = require('../../models/musicDataSchema/music_data')
const route=express.Router()


route.post('/', async(req,res)=> storeDB(req,res))

async function storeDB(request,response){
    const {sType,sId,sName,song,sLink,maName,sDuration}=request.body
    const songsData={}
    songsData._id=sId
    songsData.sType=sType
    songsData.sName=sName
    songsData.song=song
    songsData.sImage=sLink
    songsData.maName=maName
    songsData.sDuration=sDuration

    console.log(songsData)
    SongsModel=Model(sType)
    const doc=new SongsModel(songsData)

    await doc.save()
 
    response.status(200).json({success:true})
}

module.exports=route