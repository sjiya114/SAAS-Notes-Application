import React from 'react'
import  {Delete} from 'lucide-react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { NotesContext } from '../../context/NotesContext';
function DeleteNote() {
 const {userNotes,getUserNotes,deleteNote}=useContext(NotesContext);
   useEffect(()=>
   {
    getUserNotes();
   },[userNotes])
   return (
     <div className="flex flex-row max-w-screen-xl mt-20 mx-auto justify-center items-center space-x-10 space-y-10 flex-wrap">
   {userNotes && userNotes.length > 0 ? (
     userNotes.map((note, index) => (
      <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.content}</p>
        <div className="card-actions justify-end">
          <Delete onClick={()=>{deleteNote(note._id)}} color='black'/>
        </div>
      </div>
    </div>
     ))
   ) : (
     <p className="text-gray-500">No notes available</p>
   )}
 </div>
   )
 }
 
export default DeleteNote
