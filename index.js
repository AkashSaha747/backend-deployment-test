let express=require("express");
require("dotenv").config();
let app=express();


app.get("/",(req,res)=>{
res.send({msg:"home"})
})


app.get("/blog",(req,res)=>{
    res.send({msg:"blog"})
})

app.listen(process.env.PORT,()=>{
    console.log("listening")
})