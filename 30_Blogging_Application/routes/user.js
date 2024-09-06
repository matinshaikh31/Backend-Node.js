const { Router } = require("express");
const User = require("../models/user");

const route = Router();

route.get("/signin",(req,res)=>{
    return res.render("signin")
})
route.get("/signup",(req,res)=>{
    return res.render("signup")
})
route.post("/signin", async (req,res)=>{
    const {email,password}=req.body;
})
route.post("/signup",async (req,res)=>{
    const {fullName,email,password}=req.body;
    await User.create({
        fullName,
        email,
        password
    })
    return res.redirect("/")
})

module.exports=route;