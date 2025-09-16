const express=require('express');
const { Login, Register, authUser } = require('../controller/userController');
const { userIsLoggedIn } = require('../middleware/userIsLoggedIn');
const router=express.Router();
router.post("/login",Login);
router.post("/register",Register);
router.get("/auth",userIsLoggedIn,authUser);
module.exports=router;