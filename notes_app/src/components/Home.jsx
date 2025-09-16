import React from 'react'
import notes from '../assets/public/notes.jpg';
import { useNavigate } from 'react-router-dom';
function Home() {
    const nav=useNavigate();
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${notes})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Our Notes App</h1>
      <p className="mb-5">
       It is a multi-tenant SaaS Notes Application. The application allows
        multiple tenants (companies) to securely manage their users and notes, while 
        enforcing role-based access and subscription limits.Users can create ,save and edit notes
        on there favourite company membership.  
      </p>
      <button className="btn btn-primary" onClick={()=>{nav("/login")}} >Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Home
