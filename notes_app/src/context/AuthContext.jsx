import { createContext, useState,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();
axios.defaults.baseURL=import.meta.env.VITE_PUBLIC_BASEURL;
export const AuthContextProvider=({children})=>
{
const nav=useNavigate();
const [plan,setPlan]=useState("free");
const [utoken,setUtoken]=useState(localStorage.getItem("utoken"));
const [atoken,setAtoken]=useState(localStorage.getItem("atoken"));
const [count,setCount]=useState(0);
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
    toast.error( "error while logging user");
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
    toast.error("error while logging admin");
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
      setCount(res.data.count);
      setPlan(res.data.plan);
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
      setPlan(res.data.plan);
    }
    else
    {
        // toast.error("error while authenticating admin");
    }
} catch (error) {
    // toast.error("error while authenticating admin");
}
}
const logout=()=>
{
        setAtoken("");
        localStorage.clear("atoken");
        setUtoken("");
        localStorage.clear("utoken");
    nav("/");

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
const values={utoken,setAtoken,setUtoken,atoken,userLogin,userRegister,adminLogin,adminRegister,logout}
return(
<AuthContext.Provider value={values}>
{children}
</AuthContext.Provider>
);
}