const userSchema=require('../model/user');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const tenantSchema = require('../model/tenant');
const generateToken=async function(email,id)
{
   return jwt.sign({email,id},process.env.JWT_SECRET);
}

module.exports.Login=async(req,res)=>
{
 try {
    const {email,password}=req.body;
        if(!email || !password)
          return res.json({success:false,message:"enter all required credentials"});
          const user=await userSchema.findOne({email:email});
          if(!user)
           return res.json({success:false,message:"user not found"});
          const match=await bcryptjs.compare(password,user.password);
          if(!match)
          {
             return res.json({success:false,message:"incorrect credentials"});
          }
          const token=await generateToken(email,user._id);
          res.json({success:true,message:"user logged in successfully",token:token});
   } catch (error) {
      res.json({success:false,error:error});
   } 
}
module.exports.Register=async(req,res)=>
{
 try {
    const { name,email,password,role,tenantid}=req.body;
      if(!name || !email || !password || !tenantid)
       return res.json({success:false,message:"enter all credentials"});
     const user=await userSchema.findOne({email:email});
      if(user)
           return res.json({success:false,message:"user already exists"});
         const salt=await bcryptjs.genSalt(10);
         const hashedPassword=await bcryptjs.hash(password,salt);
      const newuser=new userSchema({name:name,email:email,password:hashedPassword,role:role,tenantid:tenantid});
      await newuser.save();
         const token=await generateToken(email,newuser._id);
      res.json({success:true,message:"user created successfully",token:token});
   } catch (error) {
     res.json({success:false,error:error});
   } 
}
module.exports.authUser=async(req,res)=>
{
   const tenant=await tenantSchema.findOne({_id:req.user.tenantid});
    try {
       res.json({success:true,token:req.token,plan:tenant.plan,count:tenant.notesCount}); 
    } catch (error) {
        res.json({success:false,error:error.message});
    }
}