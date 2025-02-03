import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function AllCources({item , index}) {
  const [book , setBook] = useState([])

  const getBooks = async ()=>{
      try{
        const data = await axios.get('https://free-cources-1.onrender.com/book')
        // console.log(data.data)
        setBook(data.data)
      }catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{
    getBooks()
  },[])

  return (
    <div className='w-full min-h-screen'>
      <h1 className='text-[1.3rem] md:text-[3rem] md:ml-[22rem] text-amber-600 ml-13 pt-[7rem] font-bold'>FREE All PREMIUM COURCES</h1>
      <div className=' flex md:flex-row flex-col justify-between px-6 flex-wrap gap-4 my-6 pb-10'>
              {
                book.map((item , index)=>(
                    <div key={index}>
                        <Card item={item} index={index} />
                    </div>
                ))
              }      
      </div>
    </div>
  )
}

export default AllCources