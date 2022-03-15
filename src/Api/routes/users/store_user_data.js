const express=require('express')
const route=express.Router()
const UserModel=require('../../models/userSchema/user_data')


route.post('/',async (req,res)=>{
    const {name,email,password,dob}=req.body
    const doc=new UserModel({
        _id: email,
        name: name,
        email: email,
        password: password,
        dob: dob,
        playList: [],
        lastPlayingSong: {sType:'',sName:'',song:'',sImage:'',maName:'',sDuration:''}
    })
    await doc.save()
    res.send(doc)
})

module.exports=route