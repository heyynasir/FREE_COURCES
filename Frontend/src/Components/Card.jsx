import React from 'react'

function Card({item , index}) {


  return (
    <div>
        <div className='flex w-full flex-wrap gap-4 justify-evenly'>
            <div className="box md:w-[22vw] w-[70vw] p-3 flex rounded-md flex-col [60vw] md:h-[22vw] justify-center bg-zinc-400">
                <a href={item.link}>
                  <img src={item.image} 
                  className='md:w-[18vw] w-[58vw] ml-3 h-[35vw] md:h-[12vw]  rounded-md bg-black' alt="" />
                </a>
                <h1 className='ml-3 font-semibold'>Cource : {item.cource}</h1>
                <p className='ml-3 text-sm '>Instructor : {item.instructor}</p>
                <div className='flex justify-between px-3 mt-2'>
                    <button className='px-4 py-1 cursor-pointer border-2 font-semibold border-black rounded-sm'>$00</button>
                    <a href={item.link}>
                    <button className='px-4 py-1 duration-300 hover:text-white cursor-pointer font-semibold hover:bg-green-600 border-2 border-black rounded-sm'>
                    Watch Free</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card