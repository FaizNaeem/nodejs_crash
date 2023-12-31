const express = require("express")
const app = express()

const morgan = require("morgan")
const mongoose = require("mongoose")
const router  = require("./Router/user")
const blog1 = require("./Router/blog")
app.use(morgan("tiny"))
app.use(express.json())
mongoose.connect("mongodb+srv://faiz:faiz@cluster0.enqka2g.mongodb.net/?").then(()=>{
    console.log("mongoDB connect");
}).catch((err)=>{
    console.log(err);
})



 app.get("/",(req, res)=>{
    res.send(new Date())
 })

 app.use("/user",router)
 app.use("/blog",blog1)


 app.listen(3000,()=>{
    console.log("server ready");
 })