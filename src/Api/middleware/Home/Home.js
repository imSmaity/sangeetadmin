const express=require('express')
const route=express.Router()


route.get('/',(req,res)=>{
    res.end("<h1>Home Page</h1>")
})


module.exports=route