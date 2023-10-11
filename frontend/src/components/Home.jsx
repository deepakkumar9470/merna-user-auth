import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
const {userInfo} = useSelector((state)=>state.auth)
  return (
    <div className='w-[80%]  flex items-center justify-center mt-5 mx-auto'>
        <div className='w-full h-[400px] text-gray-600'
       > 
            <img className="w-full h-[500px] object-contain" 
            src="/login-bg.svg" />

           {userInfo ? (
            <Link to="/profile">
            <Button>Go to Profile</Button>
          </Link>
           )
           :
           (<Link to="/signup">
              <Button>Get Started</Button>
            </Link>)
            }

        </div>
    </div>
  )
}

export default Home