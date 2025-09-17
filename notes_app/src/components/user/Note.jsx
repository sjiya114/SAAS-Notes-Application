import React from 'react'
import { useNavigate } from 'react-router-dom'

function Note({title,content,id}) {
  const navigate=useNavigate();
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"  onClick={()=>{navigate("/update",{state:{note:{title:title,content:content,id:id}}})}}   >Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Note
