const notesSchema = require('../model/notes');
const userSchema=require('../model/user');
const tenant=require('../model/tenant');
module.exports.createNote =async(req,res) => {
    try {
        const {title, content } = req.body;
          const authorId=req.user._id;
          const tenantId=req.user.tenantid;
        if(!authorId || !tenantId || !title || !content)
           return res.json({success:false,message:"please enter all fields properly"});
        const admin=await tenant.findOne({_id:tenantId});
        const note=new notesSchema({authorId:authorId,tenantId:tenantId,title:title,content:content});
         await note.save();
        admin.notesCount=admin.notesCount+1;
        await admin.save(); 
         res.json({success:true,message:"note created successfully",note:note});
    }
    catch (error) {
        res.json({ success: false, error: error });
    }
}
module.exports.getAllUserNotes = async(req,res) => {
    try {
       const userId=req.user._id;
       const user=await userSchema.findOne({_id:userId});
       if(!user)
       return res.json({success:false,message:"user not found"});
       const notes=await notesSchema.find({authorId:userId});
       res.json({success:true,notes:notes});
    } catch (error) {
        res.json({ success: false, error: error });
    }
}
module.exports.getAllAuthorNotes =async(req,res) => {
    try {
       const adminId=req.admin._id;
       const admin=await tenant.findOne({_id:adminId});
       if(!admin)
         return res.json({success:false,message:"user not found"});
       const notes=await notesSchema.find({tenantId:adminId});
        res.json({success:true,notes:notes});
    } catch (error) {
        res.json({ success: false, error: error });
    }
}
module.exports.getAllUsers=async(req,res)=>{
     try {
       const adminId=req.admin._id;
       const admin=await tenant.findOne({_id:adminId});
       if(!admin)
         return res.json({success:false,message:"user not found"});
       const users=await userSchema.find({tenantid:adminId});
        res.json({success:true,users:users});
    } catch (error) {
        res.json({ success: false, error: error });
    } 
}
module.exports.updateNode =async(req,res) => {
    try {
     const {title,content,noteId}=req.body;
     const note=await notesSchema.findByIdAndUpdate({_id:noteId},{title:title,content:content},{new:true});
     res.json({success:true,message:"updated note successfully",newnote:note});
    } catch (error) {
       res.json({ success: false, error: error });
    }
}
module.exports.updatePlan =async(req,res) => {
    try {
      const adminId=req.admin._id;
       const admin=await tenant.findOne({_id:adminId});
       if(!admin)
         return res.json({success:false,message:"user not found"});
        admin.plan="pro";
        await admin.save();
        res.json({success:true,message:"plan upgraded successfully"});
    } catch (error) {
       res.json({ success: false, error: error });
    }
}
module.exports.deleteNote =async(req,res) => {
    try {
      const {noteId}=req.params;
      const noten=await notesSchema.findOne({_id:noteId});
      const admin=await tenant.findOne({_id:noten.tenantId});
      const note=await notesSchema.findOneAndDelete({_id:noteId});
       admin.notesCount=admin.notesCount-1;
       await admin.save();
      res.json({success:true,message:"notes deleted successfully"});
    } catch (error) {
        res.json({ success: false, error: error });
    }
}