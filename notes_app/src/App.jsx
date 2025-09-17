import React, { useContext } from 'react'
import Navbar from './components/user/Navbar'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Notes from './components/user/Notes'
import NavbarA from './components/admin/Navbar'
import Home from './components/Home'
import UHomePage from './components/user/HomePage'
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthContext'
import DeleteNote from './components/user/DeleteNote'
import CreateNote from './components/user/CreateNote'
import UpdateNote from './components/user/UpdateNote'
import AllNotes from './components/admin/AllNotes'
import AllUsers from './components/admin/AllUsers'

function App() {
  const { utoken, atoken } = useContext(AuthContext);
  return (
    <div>
      {localStorage.getItem("utoken") && <Navbar />}
        {localStorage.getItem("atoken") && <NavbarA />}
      {/* {(!localStorage.getItem("atoken") && !localStorage.getItem("utoken")) && <Home />} */}
      <Toaster />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      {localStorage.getItem("utoken") &&  <Route path='/user/homepage' element={<UHomePage />} />}
       {localStorage.getItem("utoken") && <Route path='/user/delete' element={<DeleteNote />} />}
        {localStorage.getItem("utoken") &&<Route path='/create' element={<CreateNote />} />}
      {localStorage.getItem("utoken") &&  <Route path='/update' element={<UpdateNote />} /> }
       {localStorage.getItem("atoken") &&  <Route path='/admin/homepage' element={<AllNotes />} />}
        {localStorage.getItem("atoken") &&  <Route path='/admin/allusers' element={<AllUsers />} />}
        <Route />
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  )
}

export default App
