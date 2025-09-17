import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
function Login() {
  const navigate = useNavigate();
  const {userLogin,adminLogin}=useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
    role:"user"
  })
  const onChangeHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(data.email+" "+data.password);
    const formdata=new FormData();
    formdata.append("email",data.email);
    formdata.append("password",data.password);
    if(data.role==="user")
    {
     await userLogin(formdata);
     setData({
    email: "",
    password: "",
    role:"user"
  });
    }
    else
    {
     await adminLogin(formdata);
       setData({
    email: "",
    password: "",
    role:"user"
  });
    }
  }
  return (
    <div className='bg-black/70 fixed  w-full top-0 bottom-0 left-0 right-0 z-100 '>
      <div className='fixed py-10 mt-40 shadow-md bg-gray-200 shadow-gray-200  px-10 max-md:mx-[12vw] max-md:px-2 mx-[37vw] max-lg:mx-[28vw]   rounded-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-1' action="">
          <div className='flex flex-row justify-between'>
            <h1 className='text-black font-bold'  >Login</h1>
            <X onClick={()=>{navigate("/") }} color='black' />
          </div>
          <p className='text-gray-700 '>Please login to check notes</p>
          <label className='text-gray-700' htmlFor="">Email</label>
          <input className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1' onChange={onChangeHandler} name='email' value={data.email} type="text" />
          <label className='text-gray-700' htmlFor="">Password</label>
          <input className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1' onChange={onChangeHandler} name='password' value={data.password} type="password" />
          <label className='text-gray-700' htmlFor="">Role</label>
          <select name="role" id="role" onChange={onChangeHandler} className='border-1 border-gray-700 text-gray-700 rounded-lg py-1 px-1' value={data.role}>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          <button className='bg-indigo-950 mt-2 rounded-md px-2 py-2  text-white'>Login</button>
          <p className='text-black'>Don't have an account?<b onClick={() => { navigate("/register") }} className='cursor-pointer' >Signup here</b></p>
        </form>
      </div>
    </div>
  )
}

export default Login

