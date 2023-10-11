import React,{useEffect} from 'react'
import {Facebook, Github,Twitter,Youtube,Pencil} from 'lucide-react'
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';

import { useUpdateMutation } from '../redux/usersApiSlice';

const Profile = () => {
     
  const { userInfo } = useSelector((state) => state.auth);
  return (

    <div className="w-[50%] flex flex-col items-center justify-center mt-20 mx-auto p-5 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
	  <div className='flex items-center gap-4 relative'>
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-32 h-32 mx-auto object-cover rounded-full bg-gray-500 aspect-square" />
      <Link to="edit/:123">
      <Pencil className='w-4 h-4 absolute top-4 right-[-10px] cursor-pointer
      rounded-md text-gray-100 hover:text-violet-400' />
      </Link>
      </div>
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{userInfo?.firstName} {userInfo?.lastName}</h2>
			<p className="px-5 text-xs sm:text-base text-gray-400">Full Stack developer</p>
			<p className="px-5 text-xs sm:text-base text-gray-400">{userInfo?.email}</p>
		</div>
		<div className="flex justify-center pt-2 space-x-4 align-center">
			<Link rel="noopener noreferrer" to="/" aria-label="GitHub" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
            <Facebook />
			</Link>
			<Link rel="noopener noreferrer" to="/" aria-label="Dribble" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
          
            <Github />
			</Link>
			<Link rel="noopener noreferrer" to="/" aria-label="Twitter" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
            <Twitter />
			</Link>
			<Link rel="noopener noreferrer" to="/" aria-label="Email" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
            <Youtube />
			</Link>
		</div>
	</div>
</div>

        


  )
}

export default Profile