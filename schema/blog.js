const mongoose = require("mongoose");
const  BlogSche = new mongoose.Schema({
    title:{type :mongoose.SchemaType.String , required :true},
    catogery:{type :mongoose.SchemaType.String , required :true },
    ptice:{type :mongoose.SchemaType.number , required :true}
},{timestamps:true}
);
const blog = mongoose.model("user",BlogSche)
module.exports=blog