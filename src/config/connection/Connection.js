const mongoose=require('mongoose');
require('dotenv').config()

const url=process.env.URL

const connectDB=async ()=>{
  mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true})
    console.log("Database Connected...!");
}

module.exports=connectDB;
