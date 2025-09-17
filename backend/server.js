require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const db=require('./config/db');
const userSchema=require('./model/user');
const notesSchema=require('./model/notes');
const adminSchema=require('./model/tenant');
const admin=require('./routes/admin');
const user=require('./routes/user');
const notes=require('./routes/notes');
app.use(express.json());
app.use(cors());
app.use("/api/admin",admin);
app.use("/api/user",user);
app.use("/api/notes",notes);
app.get("/",(req,res)=>{
    res.send("status:ok");
})
const PORT=process.env.PORT || 3000;
// app.listen(PORT,(req,res)=>
// {
//     console.log("server started successfully on port:"+PORT);
// })
module.exports=app;