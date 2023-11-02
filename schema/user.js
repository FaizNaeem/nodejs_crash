const mongoose = require("mongoose");
const  user = new mongoose.Schema({
    username:{type :mongoose.SchemaTypes.String , required :true},
    email:{type :mongoose.SchemaTypes.String , required :true , unique :true},
    password:{type :mongoose.SchemaTypes.String , required :true},
},{timestamps:true}
);
const user1 = mongoose.model("user",user)
module.exports=user1
