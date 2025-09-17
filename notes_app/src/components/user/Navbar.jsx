import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Navbar() {
  const {logout,plan,count}=useContext(AuthContext);
  const nav=useNavigate();
  return (
    <div className="navbar bg-blue-950/80 text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm  dropdown-content bg-blue-950/60 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li ><button  disabled={localStorage.getItem("plan")==="free" && count>=3} onClick={()=>{localStorage.getItem("plan")==="pro" || count<3?nav("/create"):toast.success("ask admin to update subscription to pro") ;} }>Create</button></li>
        <li>
          <a href='/user/delete'>Delete</a>
        </li>
      </ul>
    </div>
    <a href='/user/homepage' className="btn btn-ghost text-xl">Notes App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><button disabled={localStorage.getItem("plan")==="free" && count>=3} onClick={()=>{localStorage.getItem("plan")==="pro" || count<3?nav("/create"):toast.success("ask admin to update subscription to pro") ;console.log(localStorage.getItem("plan"));}}   >Create</button></li>
       <li>
          <a href='/user/delete'>Delete</a>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" onClick={()=>{logout()}} >Logout</a>
  </div>
</div>
  )
}

export default Navbar
