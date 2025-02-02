import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import AllCources from './Components/AllCources'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './Context/AuthProvider'

function App() {
  
  const [authUser , setAuthUser] = useAuth();
  console.log(authUser)
  const navigate = useNavigate()


  return (
    <>
       <div className='bg-zinc-100'>
       <Navbar />
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cources' element={authUser ? <AllCources /> : <Navigate to='/signup' />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
         
       </Routes> 
       <Toaster />
       <Footer />  
       </div>
    </>
  )
}

export default App