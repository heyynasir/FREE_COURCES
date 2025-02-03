import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate()

    const handleClick = async (e)=>{
        e.preventDefault();
        try{
          console.log(email , password)
          const log = await axios.post('https://free-cources-1.onrender.com/user/login' , {email , password})
          // alert("Logged in Successfully")
          toast.success("Logged in Successfully")
          setEmail("")
          setPassword("")
          // window.location('/')
          navigate('/')
          window.location.reload()
          localStorage.setItem("User" , JSON.stringify({email , password}))
        }catch(err){
          console.log(err)
          toast.error(err.response.data.message)
        }
        
    }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
            <div className='md:w-[35%] w-[90%] h-[55%] md:h-[55%] bg-zinc-300 shadow-lg px-16 p-10'>
                    <form onSubmit={handleClick} className='w-full flex flex-col justify-center  items-center' action="">
                        <h1 className='text-[2rem] font-semibold'>Login</h1>
                        <div className='mt-3'>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} required
                            className='w-[100%] bg-zinc-500 px-6 py-1.5 rounded-md  text-white outline-none'
                             type="email" placeholder='Email' />

                            <input value={password} onChange={(e)=>setPassword(e.target.value)} required
                            className='w-[100%] mt-2 bg-zinc-500 px-6 py-1.5 rounded-md  text-white outline-none'
                             type="password" placeholder='Password' />

                             <button type='submit' className='w-[100%] cursor-pointer hover:bg-blue-800 duration-300 mt-6 bg-blue-600 font-semibold  py-1.5 rounded-md  text-white'>
                                Login</button>
                            <p className='md:ml-[8rem] ml-8 md:text-[0.8rem] text-sm mt-2 text-zinc-600'>Don't have a account?
                                 <Link to='/signup' className='font-semibold text-blue-600'>Signup</Link></p>
                        </div>
                    </form>
            </div>
    </div>
  )
}

export default Login