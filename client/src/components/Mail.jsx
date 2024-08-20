import React from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { BiArchiveIn } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const Mail = () => {
  const navigate = useNavigate();
  const {selectedMail}=useSelector(store=>store.app);
  const params=useParams()

  const deleteHandler= async()=>{
    try {
      const confirmDelete=window.confirm("Are you sure to delete this mail?")
      if(!confirmDelete)return
      const res=await axios.delete(`http://gmailclone-tau.vercel.app/api/v1/email/${params.id}`,{withCredentials:true});
      toast.success(res.data.message);
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <IoMdArrowBack onClick={() => navigate("/")} size={"20px"} />
          </div>
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <MdOutlineReport size={"20px"} />
          </div>
          <div onClick={deleteHandler} className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="hover:bg-gray-200 hover:cursor-pointer rounded-full my-2">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex justify-center hover:bg-gray-200 rounded w-[70%]">
            1 of 50
          </span>
          <MdKeyboardArrowLeft
            size={"24px"}
            className="hover:bg-gray-200 rounded-full"
          />
          <MdKeyboardArrowRight
            size={"24px"}
            className="hover:bg-gray-200 rounded-full"
          />
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selectedMail?.subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>1 day ago</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedMail?.to}</h1>
          <span>To me</span>
        </div>
        <div className="my-10">
        {selectedMail?.message}
        </div>
      </div>
    </div>
  );
};

export default Mail;
