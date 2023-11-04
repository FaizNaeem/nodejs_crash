const app = require("express")
const router = app.Router()
const schemauser = require('../schema/user');
const sendResponse = require("../helper/responce");
router.post("/", async(req , res)=>{
    console.log("body console->>", req.body);
try{
const user = await schemauser.create({...req.body})
if(user){
    sendResponse(res ,200 , user, 'Post Success', false)
}
}
catch(err){
    sendResponse(res ,400 , user, 'Post not Sucess', true)
}
})
router.put("/:id",async(req , res)=>{
    try{
        const user = await schemauser.findByIdAndUpdate(req.params.id,{...req.body},{new :true}) 
        if(user){
            sendResponse(res ,200 , user, 'Edit Success', false)
        }
        }
        catch(err){
            sendResponse(res ,400 , user, 'Edit not Sucess', true)
        }
    })

    
        router.get("/", async(req , res)=>{
            try{
                const users = await schemauser.find()
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
            router.delete("/:id",async (req , res)=>{
                try{
                    const users = await schemauser.findByIdAndDelete(req.params.id)
                    sendResponse(res ,200 , users, 'Delete Success', false)
                    
                }
                catch(err){
                    sendResponse(res ,400 , user, 'Delete not Sucess', true)
                }
                })
                module.exports=router