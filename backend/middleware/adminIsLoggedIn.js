const jwt=require('jsonwebtoken');
const adminModel=require('../model/tenant');
//middleware for checking if user is logged in or not
module.exports.adminIsLoggedIn=async(req,res,next)=>
{
    try {
       const token = req.headers.token;
        if(!token)
        {
            return res.json({success:false,message:"error while accessing token"});
        }
        console.log("1");
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log("2");
        if(!decoded || !decoded.id) 
        return res.json({success:false,message:"error while verifying token"});
        const tenant=await adminModel.findOne({_id:decoded.id});
        console.log("3");
        req.admin=tenant;
        next();
    } catch (error) {
        res.json({success:false,error:error.message});
    }
}