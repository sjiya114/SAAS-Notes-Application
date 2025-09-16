const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const admin=require('../model/tenant');
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
       const tenant=await admin.findOne({email:email});
       if(!tenant)
        return res.json({success:false,message:"admin not found"});
       const match=await bcryptjs.compare(password,tenant.password);
       if(!match)
       {
          return res.json({success:false,message:"incorrect credentials"});
       }
       const token=await generateToken(email,tenant._id);
       res.json({success:true,message:"admin logged in successfully",token:token});
   } catch (error) {
     res.json({success:false,error:error});
   } 
}
module.exports.Register=async(req,res)=>
{
   try {
    const {name,email,password}=req.body;
    if(!name || !email || !password)
    {
         return res.json({success:false,message:"enter all required credentials"});
    }
    const salt=await bcryptjs.genSalt(10);
    const hashPassword=await bcryptjs.hash(password,salt);
    const tenant=new admin({name:name,email:email,password:hashPassword});
    await tenant.save();
    const token=await generateToken(email,tenant._id);
    res.json({success:true,message:"admin created successfully",token:token});
   } catch (error) {
     res.json({success:false,error:error});
   } 
}
module.exports.authAdmin=(req,res)=>
{
    try {
       res.json({success:true,token:req.token}); 
    } catch (error) {
        res.json({success:false,error:error.message});
    }
}