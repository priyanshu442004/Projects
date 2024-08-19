import React, { useState } from 'react';
import { LuPencil } from "react-icons/lu";
import { MdInbox,MdOutlineDrafts, MdExpandMore  } from "react-icons/md";
import { FaRegStar, FaRegClock } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';



const sideItems=[
  {
    icon:<MdInbox size={'20px'}/>,
    text:"Inbox"
  },
  {
    icon:<FaRegStar size={'20px'} />,
    text:"Starred"
  },
  {
    icon:<FaRegClock  size={'20px'} />,
    text:"Snoozed"
  },
  {
    icon:<VscSend size={'20px'} />,
    text:"Sent"
  },
  {
    icon:<MdOutlineDrafts  size={'20px'} />,
    text:"Drafts"
  },
  {
    icon:<MdExpandMore  size={'20px'} />,
    text:"More"
  },
]

const Sidebar = () => {
  const dispatch=useDispatch();
  const [Selected,setSelected]=useState(0);
  return (
    <div className='w-[15%]'>
      <div className='p-3'>
        <button onClick={()=>dispatch(setOpen(true))} className='p-4 flex items-center gap-4 bg-[#C2E7FF] rounded-xl hover:shadow-lg border-none'>
            <LuPencil size={'20px'}/>
            Compose
        </button>
      </div>
      <div className='text-gray-600'>
        {
          sideItems.map((item, index)=>{
            return(
              <div onClick={()=>{setSelected(index)}} className={`${Selected==index?"font-bold bg-[#D3E3FD] text-blue-600":"hover:bg-gray-200"} flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer`}>
                {item.icon}
                
                <p>{item.text}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Sidebar
