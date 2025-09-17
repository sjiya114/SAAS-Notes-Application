import React, { useContext, useEffect } from 'react'
import { NotesContext } from '../../context/NotesContext'

function AllUsers() {
  const {users,getUsers}=useContext(NotesContext);
  useEffect(()=>
  {
    getUsers();
  },[])
  return (
   <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Account Creation Date</th>
      </tr>
    </thead>
    <tbody>
      {users && users.length>0 && users.map((user,index)=>
      <tr>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
      </tr>
        )}
    </tbody>
  </table>
</div>
  )
}

export default AllUsers
