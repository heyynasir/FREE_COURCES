import React from 'react'
import mount from '../../public/mount.png'

function Hero() {
  return (
    <div className='w-full md:h-[100vh] min-h-[100vh] flex md:flex-row flex-col'>
        <div className="left md:w-[50%] w-full h-full mt-16 p-6 flex flex-col items-center">
            <h1 className='md:text-[4rem] text-[2rem] w-[90%] leading-10 md:leading-19 font-semibold mt-10 tracking-none'>
              Welcome Here to Learn 
            <span className='font-bold text-sky-400'> Coding...</span></h1>

            <p className='w-[90%] mt-8 text-zinc-700 font-semibold'>
            Coding isn’t just a skill; it’s a superpower! 🚀 It’s a journey where you can create, innovate, and solve real-world problems. 
            Every line of code is an opportunity to learn something new, build something amazing, and shape the digital world.
            "Don’t fear bugs—every error is just the beginning of a new solution!" 💡🔥
            So start learning, keep exploring, and become the hero of your coding journey! 💻✨
            </p>
            <button className='md:w-[10vw] w-[30vw] mt-10 ml-[-12rem] md:ml-[-26rem] font-semibold text-white rounded-md py-2 bg-[deeppink] '>
              Explore More</button>
            <div className="box">
                  <p className='md:text-sm text-[0.7rem]  mt-6 ml-3  md:ml-[-3rem] font-bold'>
                  "Every great developer was once a beginner—keep pushing, keep coding!" 🚀 <br />
                  "Struggle in code today, build something amazing tomorrow!" 💻🔥 <br />
                  {/* "The only way to master coding is to never stop learning!" 💡✨ */}
                  </p>
            </div>
        </div>
        <div className="right w-full md:w-[50%] h-full ">
                <img className='w-full h-full mt-10' src={mount} alt="" />
        </div>
    </div>
  )
}

export default Hero