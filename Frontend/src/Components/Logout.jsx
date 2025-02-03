import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()

    const [authUser , setAuthUser] = useAuth()

    const handleLogout = ()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Logout Successfully")
            navigate('/signup')
            setTimeout(()=>{
                window.location.reload()
            },1000)
        }catch(err){
            // console.log(err)
            toast.error(err.message)
        }
    }

  return (
    <div>
        <button onClick={handleLogout} className='px-4 cursor-pointer py-1 bg-red-600 rounded-md text-white font-semibold'>
            Logout
        </button>
    </div>
  )
}

export default Logout