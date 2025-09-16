const mongoose=require('mongoose');
const notesSchema=new mongoose.Schema({
authorId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:true
},
tenantId:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:'tenants',
    required:true
},
title:
{
    type:String,
    required:true
},
content:
{
    type:String,
    required:true
}
},{timestamps:true});
module.exports=mongoose.model("notes",notesSchema);