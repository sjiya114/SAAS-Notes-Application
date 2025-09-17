import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { NotesContext } from '../../context/NotesContext';

function Navbar() {
  const {plan,logout}=useContext(AuthContext);
  const {updatePlan}=useContext(NotesContext);
  return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a href='/admin/homepage' className="btn btn-ghost text-xl">Admin</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><button disabled={plan==="pro"} onClick={()=>{plan==="free" && updatePlan()}} className='bg-blue-700 text-white px-6 y-2 rounded-2xl cursor-pointer'>{plan==="free"?'free':'Pro'}</button></li>
      <li>
        <details>
          <summary>Information</summary>
          <ul className="bg-base-100 z-50 rounded-t-none p-2">
            <li><a href='/admin/allusers'>All users</a></li>
            <li><a href='/admin/homepage'>All Notes</a></li>
            <li><a onClick={()=>{logout()}}>Logout</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
