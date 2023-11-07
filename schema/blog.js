// const mongoose = require("mongoose");
// const  BlogSche = new mongoose.Schema({
//     title:{type :mongoose.SchemaType.String , required :true},
//     catogery:{type :mongoose.SchemaType.String , required :true },
// },{timestamps:true}
// );
// const blog = mongoose.model("user",BlogSche)
// module.exports=blog
const mongoose = require("mongoose");
const  BlogSche = new mongoose.Schema({
    title:{type :mongoose.SchemaTypes.String , required :true},
    description:{type :mongoose.SchemaTypes.String , required :true , unique :true},
    users:{type :mongoose.SchemaTypes.ObjectId  , ref:"users", }

},{timestamps:true}
);
const blog = mongoose.model("BlogSche",BlogSche)
module.exports=blog
