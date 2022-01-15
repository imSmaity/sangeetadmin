const express=require('express')
const route=express.Router()
const UserModel=require('../../models/userSchema/user_data')


route.post('/',async (req,res)=>{
    const id=req.body.id;
    const findUser=await UserModel.findById(id).exec()

    res.send(findUser)
})

module.exports=route