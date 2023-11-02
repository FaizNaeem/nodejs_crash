const app = require("express")
const router = app.Router()
const user = require('../schema/user')
router.post("/",(req , res)=>{
    console.log("body console->>", req.body);
res.send("post")
})
router.put("/:id",(req , res)=>{
    console.log("body console->>", req.body);
    res.send("post")
    })

    router.patch("/",(req , res)=>{
        console.log("body console->>", req.body);
        res.send("patch")
        })
        router.get("/",(req , res)=>{
            console.log("body console->>", req.body);
            res.send("get")
            })
            router.delete("/:id",(req , res)=>{
                console.log("body console->>", req.params.id);
                res.send("delete")
                })
                module.exports=router