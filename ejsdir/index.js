const express=require("express");
const path = require("path");
const app=express();

const port=3000;

app.use(express.static(path.join(__dirname,"public")));

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
    // const followers=['sakshi','sanika','sanjay','dhanashri'];
    // const { username }=req.params;
    // res.render("insta",{ username , followers });

    const instadata = require("./data.json");
    const { username } = req.params;
    const data =instadata[username];
    if(data)
        {
            res.render("insta" , { username , data});
        }
        else {
            res.render("error");
        }



});


app.listen(port,()=>{
    console.log("listening ");
});