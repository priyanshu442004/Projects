import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import {GoTag} from 'react-icons/go'
import AllMails from "./AllMails";


const mailType=[
    {
        icon:<MdInbox size={'20px'} />,
        text: "Primary"
    },
    {
        icon:<GoTag size={'20px'} />,
        text: "Promotions"
    },
    {
        icon:<FaUserFriends size={'20px'} />,
        text: "Socials"
    },
]

const Inbox = () => {
    const [Selected,setSelected]= useState(0)

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 ml-12">
      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} className="hover:bg-gray-200 rounded" />
            <FaCaretDown size={"20px"} className="hover:bg-gray-200 rounded" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="flex justify-center hover:bg-gray-200 rounded w-[70%]">1 to 50</span>
            <MdKeyboardArrowLeft size={'24px'} className="hover:bg-gray-200 rounded-full"/>
            <MdKeyboardArrowRight size={'24px'}className="hover:bg-gray-200 rounded-full"/>
        </div>
      </div>
      <div className="h-90vh overflow-y-auto">
    <div className="flex items-center gap-1">
        {
            mailType.map((item, index)=>{
                return(
                    <button onClick={()=>setSelected(index)} className={`${Selected==index?"border-b-4 border-b-blue-600 text-blue-600":"border-b-4 border-b-transparent"} flex items-center gap-5 p-4 w-52 hover:bg-gray-100}`}>
                        {item.icon}
                        <span>{item.text}</span>
                    </button>
                );
            })
        }
    </div>
      </div>
      <div>
        <AllMails/>
      </div>
    </div>
  );
};

export default Inbox;
