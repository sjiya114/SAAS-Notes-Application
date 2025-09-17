import React, { useContext } from 'react'
import Navbar from './components/user/Navbar'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Notes from './components/user/Notes'
import NavbarA from './components/admin/Navbar'
import Home from './components/Home'
import HomePage from './components/admin/HomePage'
import UHomePage from './components/user/HomePage'
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthContext'
import DeleteNote from './components/user/DeleteNote'
import CreateNote from './components/user/CreateNote'
import UpdateNote from './components/user/UpdateNote'

function App() {
  const { utoken, atoken } = useContext(AuthContext);
  return (
    <div>
      {localStorage.getItem("utoken") && <Navbar />}
      {(!localStorage.getItem("atoken") && !localStorage.getItem("utoken")) && <Home />}
      <Toaster />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/homepage' element={<HomePage />} />
        <Route path='/user/homepage' element={<UHomePage />} />
        <Route path='/user/delete' element={<DeleteNote />} />
        <Route path='/create' element={<CreateNote />} />
        <Route path='/update' element={<UpdateNote />} />
        <Route />
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  )
}

export default App
