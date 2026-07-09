const express=require("express");

const app=express();
const port=8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

/*
app.use((req,res)=>{
    console.log("Request received !!!!!");
    //console.log(req);
    //res.send("Hello sakshii");
    
    // res.send({
    //     name:"sakshii",
    //     age:21,
    // });

    let code="<h1>HELLO SAKSHII !!</h1> <br> <p> This is the basic response</p>"
    res.send(code);
});
*/

/*
app.get("/",(req,res)=>{
    res.send("<h1>HELLO SAKSHII !!</h1>");
});

app.get("/apple",(req,res)=>{
    res.send("Visited apple page !!");
});

app.get("/banana",(req,res)=>{
    res.send("Visited banana page");
});

app.use((req,res)=>{
    res.status(404).send("page not available"); 
});

*/
/*
app.post("/",(req,res)=>{
    res.send("Helloo everyone !!");
})
    */
/*
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`Welcome ${username}`);
});*/

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("not searched anything");
    }
    res.send(`Searched : ${q}` );
});