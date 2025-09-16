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
app.use("/admin",admin);
app.use("/user",user);
app.use("/notes",notes);
const PORT=process.env.PORT || 3000;
app.listen(PORT,(req,res)=>
{
    console.log("server started successfully on port:"+PORT);
})