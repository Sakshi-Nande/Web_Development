const express=require("express");
const path = require("path");
const app=express();

const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
    console.log("Home route called");
    
});

app.get("/rolldice",(req,res)=>{
    const rolldice= Math.floor(Math.random()*6)+1;
    res.render("rolldice",{ rolldice });
});

app.get("/ig/:username",(req,res)=>{
    const { username }=req.params;
    res.render("insta",{ username });
});

app.listen(port,()=>{
    console.log("listening ");
});