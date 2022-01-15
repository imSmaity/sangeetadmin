const mongoose=require('mongoose')
const {Schema}=mongoose

const musicSchema=new Schema({
    _id: String,
    sType:String,
    sName:String,
    song:String,
    sImage:String,
    maName:String,
    sDuration:String
})

function Model(songType){
    return SongsModel=new mongoose.model(songType,musicSchema) 
}

module.exports=Model