import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails, setOpen } from '../redux/appSlice';
import toast from 'react-hot-toast';
import axios from "axios";

const SendMail = () => {
  const {open, emails}=useSelector(store =>store.app)

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const [formData,setFormData]=useState({
    to:"",
    subject:"",
    message:""
  })
  const dispatch = useDispatch();
  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post('http://localhost:3000/api/v1/email/create',formData,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      // console.log(res.data)
      dispatch(setEmails([...emails,res.data.email]))
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message)
      
    }
    dispatch(setOpen(false))
    
  }
  return (
    <div className={`${open?'block':'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className='flex items-center justify-between px-3 py-2 bg-[#F2F6FC]'>
        <h1>
          New message
        </h1> 
        <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
          <RxCross2 onClick={()=>dispatch(setOpen(false))} size={'20px'} />
        </div>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input onChange={changeHandler} value={formData.to} type="text" name="to" id="" className='outline-none' placeholder='To'/>
        <hr />
        <input onChange={changeHandler} value={formData.subject} type="text" name="subject" id="" className='outline-none' placeholder='Subject' />
        <hr />
        <textarea onChange={changeHandler} value={formData.message} name="message" id="" cols={"30"} rows={"10"} className='outline-none py-1'></textarea>
        <button type='submit' className='bg-blue-700 text-white rounded-full px-5 py-1 w-fit'>Send</button>
      </form>
    </div>
  )
}

export default SendMail
