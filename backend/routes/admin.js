const express=require('express');
const { Login, Register, authAdmin } = require('../controller/adminController');
const { adminIsLoggedIn } = require('../middleware/adminIsLoggedIn');
const router=express.Router();
router.post("/login",Login);
router.post("/register",Register);
router.get("/auth",adminIsLoggedIn,authAdmin);
module.exports=router;