import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMail, setUser } from "../redux/appSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [text, setText] = useState("");
  const { user } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/user/logout");
      toast.success(res.data.message);
      dispatch(setUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const changeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchMail(text));
  }, [text]);
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8 cursor-pointer"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="Gmail_logo"
          />
          <h1 className="text-gray-600 text-2xl font-medium cursor-pointer">
            Gmail
          </h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-[55%] mr-55">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full ml-[60px]">
              <IoSearchOutline
                size={"24px"}
                className="text-gray-700 mr-1 hover:bg-gray-200 rounded-full cursor-pointer"
              />
              <input
                type="text"
                onChange={changeText}
                value={text}
                name=""
                id=""
                placeholder="Search mail"
                className="rounded-full w-full bg-transparent outline-none px-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <CiCircleQuestion size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoSettingsOutline size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <CiCircleQuestion size={"24px"} />
            </div>
            <span
              onClick={logoutHandler}
              className="underline hover:cursor-pointer"
            >
              Logout
            </span>
            <Avatar
              src={user.profilePhoto}
              size="30"
              round={true}
              className="cursor-pointer"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
