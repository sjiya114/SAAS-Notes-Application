import React, { useContext, useEffect } from 'react'
import Note from './Note'
import { NotesContext } from '../../context/NotesContext'

function Notes() {
  const {userNotes,getUserNotes}=useContext(NotesContext);
  useEffect(()=>
  {
   getUserNotes();
  },[])
  return (
    <div className="flex flex-row max-w-screen-xl mt-20 mx-auto justify-center items-center space-x-10 space-y-10 flex-wrap">
  {userNotes && userNotes.length > 0 ? (
    userNotes.map((note, index) => (
      <Note  key={note.id || index} title={note.title} id={note._id}   content={note.content} />
    ))
  ) : (
    <p className="text-gray-500">No notes available</p>
  )}
</div>
  )
}

export default Notes
