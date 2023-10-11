import { useState, useEffect } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
// import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../redux/usersApiSlice';
import { setCredentials } from '../redux/authSlice';
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader';
const SignUp = () => {
    const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register,{isLoading}] = useRegisterMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {userInfo} = useSelector((state)=>state.auth)

useEffect(() => {
  if(userInfo){
    navigate('/')
  }
  
}, [navigate,userInfo])



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        firstName,
        lastName,
        email,
        password
      }).unwrap()
      dispatch(setCredentials({...res}))
      toast.success('Registration Successfully')
      navigate('/login')
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }

   
  };
  return (
 
    <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
            <Link href="/">
                <h3 className="text-4xl font-bold text-purple-600">
                    SignUp
                </h3>
            </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form onSubmit={submitHandler}>
                <div className="mb-4 mt-2">
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        FirstName
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="block w-full mt-1 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mb-4 mt-2">
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        lastName
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                            className="block w-full mt-1 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Email
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="block w-full mt-1 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Password
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="block w-full mt-1 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                {isLoading && <Loader />}
             
                <div className="flex items-center justify-end mt-4">
                    <Link
                        className="text-sm text-gray-600 underline hover:text-gray-900"
                        to="/login"
                    >
                        Already registered? {" "} Login
                    </Link>
                    <Button
                        type="submit"
                    >
                        Register
                    </Button>
                </div>
            </form>
        </div>
    </div>


  )
}

export default SignUp