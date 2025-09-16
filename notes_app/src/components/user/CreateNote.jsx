import React, { useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'
import { useState } from 'react';

function CreateNote() {
    const {createNote}=useContext(NotesContext);
     const [data, setData] = useState({
        title: "",
        content: "",
      })
      const onChangeHandler = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
      }
      const handleSubmit = async(e) => {
        e.preventDefault();
        const formdata=new FormData();
        formdata.append("title",data.title);
        formdata.append("content",data.content);
        await createNote(formdata);
         setData({
        title: "",
        content: ""
      })
    }
  return (
    <div className='flex items-center justify-center mt-20'>
        <form onSubmit={handleSubmit}>
      <fieldset   className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Create Note</legend>

  <label className="label">Title</label>
  <input type="title" name='title'  onChange={onChangeHandler} className="input" placeholder="title" />

  <label className="label">Content</label>
  <input type="content" name='content' onChange={onChangeHandler} className="input" placeholder="content" />

  <button type='submit' className="btn btn-neutral mt-4">Create Note</button>
</fieldset>
</form>
    </div>
  )
}

export default CreateNote
