import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.app);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
