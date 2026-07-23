const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require('method-override');

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let posts=[
    {
        id: uuidv4(),
        name:"Sakshi Nande",
        content:"Life begins at the end of your comfort zone",
    },
    {
        id: uuidv4(),
        name:"Sanika Nande",
        content:"Push yourself because no one is going to do it for you",
    },
    {
        id: uuidv4(),
        name:"Sanjay Dhanashri",
        content:"When you feel like quitting remember why you started",
    }
];

app.get("/posts",(req,res)=>{
    res.render("main",{ posts });
});

app.get("/posts/new",(req,res)=>{
    res.render("new");
});

app.post("/posts",(req,res)=>{
    let {name, content }=req.body;
    let id = uuidv4();
    posts.push({id ,name ,content});
    res.redirect("/posts");
})

app.get("/posts/:id" , (req,res)=>{
    let {id }= req.params;
    let post = posts.find((posts)=> id === posts.id);
    res.render("show", { post });
})

app.patch("/posts/:id", (req,res) =>{
    let {id}= req.params;
    let newcontent=req.body.content;
    let post = posts.find((posts)=> id === posts.id);
    post.content=newcontent;

    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((posts)=> id === posts.id);
    res.render("edit",{ post });
})

app.delete("/posts/:id",(req,res)=>{
    let {id}= req.params;
    posts = posts.filter((posts)=> id !== posts.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("Listening");
});