const express=require('express');
const UserModel=require('../../models/userSchema/user_data');
const route=express.Router();


route.post('/',async(req,res)=>{

    const id=req.body.email;

    const model=await UserModel.findByIdAndUpdate(id,req.body)

    res.send(model);

})



module.exports=route;