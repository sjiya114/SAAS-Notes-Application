import React from 'react'

function Note({title,content}) {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Note
