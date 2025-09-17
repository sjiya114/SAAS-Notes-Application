import React from 'react'
import { NotesContext } from '../../context/NotesContext';
import { useContext } from 'react';
import { useEffect } from 'react';
function AllNotes() {
  const {adminNotes,getAdminNotes}=useContext(NotesContext);
    useEffect(()=>
    {
      getAdminNotes();
    },[])
  return (
   <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>AuthorId</th>
        <th>Note Creation Date</th>
      </tr>
    </thead>
    <tbody>
      {adminNotes && adminNotes.length>0 && adminNotes.map((notes,index)=>
      <tr>
        <th>{index+1}</th>
        <td>{notes.title}</td>
        <td>{notes.authorId}</td>
        <td>{notes.createdAt}</td>
      </tr>
        )}
    </tbody>
  </table>
</div>
  )
}

export default AllNotes
