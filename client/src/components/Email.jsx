import React from "react";
import { MdCropSquare, MdOutlineStarBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedMail } from "../redux/appSlice";

const Email = ({email}) => {
  const navigate=useNavigate();
  const dispatch =useDispatch()
  const openEmail=()=>{
    dispatch(setSelectedMail(email))
    navigate(`mail/${email._id}`)
  }

  return (
    <div onClick={openEmail} className="flex items-center justify-between border-b border-b-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="text-gray-400 hover:bg-gray-200 rounded-full">
          <MdCropSquare size={"20px"} />
        </div>
        <div className="text-gray-400 hover:bg-gray-200 rounded-full">
          <MdOutlineStarBorder size={"20px"} />
        </div>
        <div>
          <h1 className="font-semibold">{email?.subject}</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>
          {email?.message}
        </p>
      </div>
      <div className="flex-none text-gray-600 text-sm">
        <p>{email?.createdAt}</p>
      </div>
    </div>
  );
};

export default Email;
