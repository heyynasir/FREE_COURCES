import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
    
    const [fullname , setName] = useState("")
    const [email , setEmail]= useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()

    const handleClick = async (e)=>{
        e.preventDefault();
        try{
          console.log(fullname , email , password )
          const getData = await axios.post('http://localhost:4001/user/signup' , {fullname ,email , password})
          setName("")
          setEmail("")
          setPassword("")
          toast.success("Signin Successfully!")
          localStorage.setItem("User" , JSON.stringify({fullname,email,password}))
          navigate('/')
          window.location.reload();
        }catch(err){
          // console.log()
          toast.error(err.response.data.message)
        }
    }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <div className='md:w-[35%] w-[90%] h-[65%] mt-12 md:h-[65%] bg-zinc-300 shadow-lg px-16 p-10'>
            <form onSubmit={handleClick} className='w-full flex flex-col justify-center  items-center' action="">
                <h1 className='text-[2rem] font-semibold'>Signin</h1>
                <div className='mt-3'>
                    <input value={fullname} onChange={(e)=>setName(e.target.value)} required
                    className='w-[100%] mt-2 bg-zinc-500 px-6 py-1.5 rounded-md  text-white outline-none'
                     type="text" placeholder='Name' />

                    <input value={email} onChange={(e)=>setEmail(e.target.value)} required
                    className='w-[100%] mt-2 bg-zinc-500 px-6 py-1.5 rounded-md  text-white outline-none'
                     type="email" placeholder='Email' />

                    <input value={password} onChange={(e)=>setPassword(e.target.value)} required
                    className='w-[100%] mt-2 bg-zinc-500 px-6 py-1.5 rounded-md  text-white outline-none'
                     type="password" placeholder='Password' />
                     <button type='submit' className='w-[100%] cursor-pointer hover:bg-blue-800 duration-300 mt-6 bg-blue-600 font-semibold  py-1.5 rounded-md  text-white'>
                        Signin</button>
                    <p className='md:ml-[10rem] ml-[5rem]  text-sm mt-2 text-zinc-600'>have a account?
                         <Link to='/login' className='font-semibold text-blue-600'>Login</Link></p>
                </div>
            </form>
    </div>
</div>
  )
}

export default Signup