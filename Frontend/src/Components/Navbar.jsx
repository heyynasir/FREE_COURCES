import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useAuth } from '../Context/AuthProvider';

function Navbar() {

    const [authUser , setAuthUser ] = useAuth()

    const [bar , setBar] = useState(false)
    const handlebar = ()=>{
        setBar(!bar)
        console.log(bar)
    }

  return (
   <nav className='md:px-10 fixed px-6 h-[11vh] items-center bg-zinc-100 shadow-lg flex justify-between w-full'>
        <div className="logo flex items-center gap-4 cursor-pointer ">
        <p className='md:hidden md' onClick={handlebar}><FaBars size={25} /></p>
          <Link to='/'>
          <h1 className=' text-[1rem] md:text-[1.3rem] font-bold text-blue-600'>CODING <span className='text-[red]'>NATION</span></h1>
          </Link>
            
        </div>

        <div // desktop
        className="links md:flex gap-4 items-center hidden text-[1.1rem] font-semibold">
            <Link className='hover:text-green-500 duration-300' to='/'>Home</Link>
            <Link className='hover:text-green-500 duration-300' to='/cources'>Premium-cources</Link>
            <Link className='hover:text-green-500 duration-300' to='/contact'>Contact</Link>
            <Link className='hover:text-green-500 duration-300' to='/about'>About</Link>
            <div className="searchbar flex items-center">
                <input className='w-[15vw] rounded-l-md bg-zinc-200 p-1 outline-none' type="text" placeholder='search' />
                <p className='font-semibold rounded-r-md cursor-pointer bg-zinc-200 p-1'><CiSearch size={26.5}/></p>
            </div>
        </div>
        {
            authUser? <Logout /> :
            <Link to='/login' className="btn ">
                <button className='px-4 cursor-pointer py-1 bg-blue-600 rounded-md text-white font-semibold'>Login</button>
            </Link>
        }

        {/* mobile view */}
       <div className={`${bar ? "fixed rounded-lg top-0 p-10 right-0 w-[50vw] h-[70vw] bg-black transition-all duration-300"
                                 : "transition-all hidden duration:300"}`}>
            <div className='text-white font-semibold flex flex-col gap-2'>
                <Link className='hover:text-green-500 duration-300' to='/'>Home</Link>
                <Link className='hover:text-green-500 duration-300' to='/cources'>Premium Cources</Link>
                <Link className='hover:text-green-500 duration-300' to='/contact'>Contact</Link>
                <Link className='hover:text-green-500 duration-300' to='/about'>About</Link>
            </div>

       </div>
   </nav>
  )
}

export default Navbar