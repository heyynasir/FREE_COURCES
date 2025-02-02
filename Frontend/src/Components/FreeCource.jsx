import React, { useEffect, useState } from 'react'
import Card from './Card'
// import data from './cources.json'
import axios from 'axios'

function FreeCource() {
  const [tut , setTut] = useState([])
    
  const handleData = async ()=>{
       try{
            const courceData = await axios.get('http://localhost:4001/book')
            // console.log(courceData.data)
            const findData = courceData.data
            const filterData = findData.filter((item) => item.category === "normal")
            // console.log(filterData)
            setTut(filterData)
       }catch(err){
          console.log(err)
       }
  }
  useEffect(()=>{
      handleData()
  },[])

  return (
    <div className='w-full min-h-[100vh]'>
        <h1 className='text-[2rem] md:ml-[32rem] ml-20 my-3 font-bold'>FREE COURCES</h1>
        <div className=' flex md:flex-row flex-col justify-between px-6 flex-wrap gap-4 my-6'>
           {
              tut.map((item , index)=>(
                  <div key={index}>
                      <Card item={item} index={index}/>
                  </div>
              ))
           }
            
        </div>
    </div>
  )
}

export default FreeCource