import React from 'react'
import {X} from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
function Register() {
  const navigate=useNavigate();
  const {userRegister,adminRegister}=useContext(AuthContext);
    const [data,setData]=useState({
      name:"",
      email:"",
      password:"",
      role:"user",
      tenant:""
    })
    const onChangeHandler=(e)=>
    {
      e.preventDefault();
      setData({...data,[e.target.name]:e.target.value});
    }
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(data.email+" "+data.password);
        const formdata=new FormData();
        formdata.append("name",data.name);
        formdata.append("email",data.email);
        formdata.append("password",data.password);
         formdata.append("tenant",data.tenant);
        if(data.role==="user")
        {
         await userLogin(formdata);
         setData({
          name:"",
        email: "",
        password: "",
        role:"user",
        tenant:""
      });
        }
        else
        {
         await adminLogin(formdata);
           setData({
          name:"",
        email: "",
        password: "",
        role:"user",
        tenant:""
      });
        }
      }
   
  return (
    <div className='bg-black/70 w-full top-0 bottom-0 left-0 right-0 z-100 fixed'>
      <div className='fixed py-10 mt-40 shadow-md bg-white shadow-gray-200  px-10 max-md:mx-[12vw] max-md:px-2 mx-[37vw] max-lg:mx-[28vw]   rounded-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-1' action="">
        <div className='flex flex-row justify-between'>
         <h1 className='text-black font-bold'>Create Account</h1>
         <X onClick={()=>{navigate("/") }} color='black'/>
        </div>
        <p className='text-gray-500 '>Please signup to create notes</p>
        <label className='text-gray-700' htmlFor="">FullName</label>
        <input onChange={onChangeHandler} name='name' value={data.name}  className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1' type="text" />
        <label className='text-gray-700' htmlFor="">Email</label>
        <input onChange={onChangeHandler} name='email' value={data.email} className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1' type="text" />
        <label className='text-gray-700' htmlFor="">Password</label>
        <input onChange={onChangeHandler} name='password' value={data.password} className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1' type="password" />
        <label className='text-gray-700' htmlFor="">Role</label>
        <select name="role" id="role" onChange={onChangeHandler}  className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1'  value={data.role}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
       {data.role==="user" && <select name="tenant" id="tenant" onChange={onChangeHandler}  className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1'  value={data.tenant}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>}
        <button className='bg-indigo-950 mt-2 rounded-md px-2 py-2  text-white'>Create Account</button>
        <p className='text-black'   >Already have an account?<b className='cursor-pointer' onClick={()=>{navigate("/login")}}>Login here</b></p>  
      </form>
    </div>
    </div>
    
  )
}

export default Register

