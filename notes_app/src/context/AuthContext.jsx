import { createContext, useState,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();
axios.defaults.baseURL="http://localhost:5500";
export const AuthContextProvider=({children})=>
{
const nav=useNavigate();
const [utoken,setUtoken]=useState(localStorage.getItem("utoken"));
const [atoken,setAtoken]=useState(localStorage.getItem("atoken"));
const userLogin=async(formdata)=>
{
try {
    const res=await axios.post("/user/login",formdata,{headers:{'Content-Type':'application/json'}});
    if(res.data.success)
    {
       localStorage.setItem("utoken",res.data.token);
       console.log(res.data.token);
       setUtoken(res.data.token);
       nav("/user/homepage");
       toast.success(res.data.success);
    }
    else
    {
        toast.error("error while logging user");
    }
} catch (error) {
    toast.error(error || "error while logging user");
}
}
const adminLogin=async(formdata)=>
{
try {
    const res=await axios.post("/admin/login",formdata,{headers:{'Content-Type':'application/json'}});
    if(res.data.success)
    {
         setAtoken(res.data.token);
        localStorage.setItem("atoken",res.data.token);
         nav("/admin/homepage");
      toast.success(res.data.message);
    }
    else
    {
        toast.error("error while logging admin");
    }
} catch (error) {
    toast.error(error || "error while logging admin");
}
}
const userRegister=async(formdata)=>
{
try {
    const res=await axios.post("/user/register",formdata,{headers:{'Content-Type':'application/json'}});
    if(res.data.success)
    {
     localStorage.setItem("utoken",res.data.token);
       setUtoken(res.data.token);
        nav("/user/homepage");
     toast.success(res.data.message);
    }
    else
    {
        toast.error("error while registering user");
    }
} catch (error) {
    toast.error(error || "error while registering user");
}
}
const adminRegister=async(formdata)=>
{
    try {
    const res=await axios.post("/admin/register",formdata,{headers:{'Content-Type':'application/json'}});
    if(res.data.success)
    {
       setAtoken(res.data.token);
        localStorage.setItem("atoken",res.data.token);
         nav("/admin/homepage");
      toast.success(res.data.message);
    }
    else
    {
        toast.error("error while registering admin");
    }
} catch (error) {
    toast.error(error || "error while registering admin");
}
}
const authUser=async()=>
{
try {
    const res=await axios.get("/user/auth");
    if(res.data.success)
    {
      setUtoken(res.data.token);
    }
    else
    {
        // toast.error("error while authenticating user");
    }
} catch (error) {
    // toast.error("error while authenticating user");
}
}
const authAdmin=async()=>
{
try {
    const res=await axios.get("/admin/auth");
    if(res.data.success)
    {
      setAtoken(res.data.token);
    }
    else
    {
        // toast.error("error while authenticating admin");
    }
} catch (error) {
    // toast.error("error while authenticating admin");
}
}
useEffect(()=>{
     if(utoken)
    {
      axios.defaults.headers.common["token"]=utoken;
    }
    else if(atoken)
    {
        axios.defaults.headers.common["token"]=atoken;
    }
    authAdmin();
    authUser();
},[]);
const values={utoken,setAtoken,setUtoken,atoken,userLogin,userRegister,adminLogin,adminRegister}
return(
<AuthContext.Provider value={values}>
{children}
</AuthContext.Provider>
);
}