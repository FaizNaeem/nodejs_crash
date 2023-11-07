const app = require("express")
const blog1 = app.Router()
const schemaBlog = require('../schema/blog');
const sendResponse = require("../helper/helperResponce");
const blog = require("../schema/blog");
blog1.post("/", async(req , res)=>{
    console.log("body console->>", req.body);
try{
const blog = await schemaBlog.create({...req.body})
if(blog){
    sendResponse(res ,200 , blog, 'Post Success', false)
}
}
catch(err){
    sendResponse(res ,400 , blog, 'Post not Sucess', true)
}
})
blog1.put("/:id",async(req , res)=>{
    try{
        const user = await schemaBlog.findByIdAndUpdate(req.params.id,{...req.body},{new :true}) 
        if(user){
            sendResponse(res ,200 , user, 'Edit Success', false)
        }
        }
        catch(err){
            sendResponse(res ,400 , user, 'Edit not Sucess', true)
        }
    })

    
        blog1.get("/", async(req , res)=>{
            try{
                const users = await schemaBlog.find()
                if(users){
                    sendResponse(res ,200 , users, 'Find Success', false)
                }
                else{
                    sendResponse(res ,400 , users, 'Find not Sucess', true)
                }
            }
            catch(err){
                sendResponse(res ,400 , user, 'Find not Sucess', true)
            }
        })
        // specific 1 user 
        blog1.get("/:id", async(req , res)=>{
            try{
                const users = await schemaBlog.findById(req.params.id)
                if(users){
                    sendResponse(res ,200 , users, 'user found Success', false)
                }
                else{
                    sendResponse(res ,400 , users, 'User not Sucess', true)
                }
            }
            catch(err){
                sendResponse(res ,400 , user, 'Find not Sucess', true)
            }
        })
            blog1.delete("/:id",async (req , res)=>{
                try{
                    const users = await schemaBlog.findByIdAndDelete(req.params.id)
                    sendResponse(res ,200 , users, 'Delete Success', false)
                    
                }
                catch(err){
                    sendResponse(res ,400 , user, 'Delete not Sucess', true)
                }
                })
                module.exports=blog1