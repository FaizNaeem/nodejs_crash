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
    username:{type :mongoose.SchemaTypes.String , required :true},
    email:{type :mongoose.SchemaTypes.String , required :true , unique :true},
    user:{type :mongoose.SchemaType.ObjectId  , ref:"user", required :true}

},{timestamps:true}
);
const blog = mongoose.model("new",BlogSche)
module.exports=blog
