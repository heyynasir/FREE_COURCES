import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
   <>
        <hr className='border-1 border-zinc-300  shadow-lg' />
        <footer className='w-full h-[25vh] gap-2  flex flex-col justify-center items-center'>
           
            <div className='flex md:gap-6 md:text-[1rem] text-[0.9rem] gap-5'>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Jobs</p>
                    <p>Kit</p>
            </div>
            <div className="icos flex gap-4">
                    <p><FaTwitter size={25} /></p>
                    <p><FaYoutube size={25} /></p>
                    <p><FaLinkedin size={25} /></p>
            </div>
            <p className='md:text-[.8rem] text-[0.6rem]'>Copyright @2025 - All right reserved by Coding Nations</p>
   </footer>
   </>
  )
}

export default Footer