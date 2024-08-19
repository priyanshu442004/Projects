import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { setUser } from '../redux/appSlice';

const Login = () => {
  const [Input, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch=useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
    console.log(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(//In summary, this code sends a JSON-formatted POST request to a registration endpoint
        "http://localhost:3000/api/v1/user/login",//This line sends a POST request to the specified URL (http://localhost:3000/api/v1/user/register) using the axios library.
        Input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,//This option tells axios to include credentials (e.g., cookies, authentication tokens) in the request. This is useful when working with authenticated APIs.
        }
      );
      
      
      if(res.data.success){
        dispatch(setUser(res.data.user))
        navigate("/")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message)
    }
  };
  return (
    <div className='flex items-center justify-center w-screen mt-10'>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 bg-white p-4 w-[40%]'>
        <h1 className='font-bold text-2xl uppercase my-2'>Login</h1>
        <input onChange={changeHandler} value={Input.email} type="email" name="email" id="" placeholder='email' className='border border-gray-500 rounded-md px-2 py-1'/>
        <input onChange={changeHandler} value={Input.password}  type="password" name="password" id="" placeholder='password' className='border border-gray-500 rounded-md px-2 py-1'/>
        <p>Don't have account? <span className='text-red-700 hover:cursor-pointer' onClick={()=>{navigate('../signup')}}>Signup</span></p>
        <button type='submit' className='bg-red-800 text-white my-2 rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default Login
