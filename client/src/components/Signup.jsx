import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [Input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
    console.log(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(//In summary, this code sends a JSON-formatted POST request to a registration endpoint
        "http://gmailclone-tau.vercel.app/api/v1/user/register",//This line sends a POST request to the specified URL (http://localhost:3000/api/v1/user/register) using the axios library.
        Input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,//This option tells axios to include credentials (e.g., cookies, authentication tokens) in the request. This is useful when working with authenticated APIs.
        }
      );
      
      if(res.data.success){
        navigate("../login")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message)
    }
  };

  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 bg-white p-4 w-[40%]"
      >
        <h1 className="font-bold text-2xl uppercase my-2">Signup</h1>
        <input
          onChange={changeHandler}
          value={Input.fullname}
          type="text"
          name="fullname"
          id=""
          placeholder="name"
          className="border border-gray-500 rounded-md px-2 py-1"
        />
        <input
          onChange={changeHandler}
          value={Input.email}
          type="email"
          name="email"
          id=""
          placeholder="email"
          className="border border-gray-500 rounded-md px-2 py-1"
        />
        <input
          onChange={changeHandler}
          value={Input.password}
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="border border-gray-500 rounded-md px-2 py-1"
        />
        <p>
          Already have account?{" "}
          <span
            className="text-red-700 hover:cursor-pointer"
            onClick={() => {
              navigate("../login");
            }}
          >
            Login
          </span>
        </p>
        <button type="submit" className="bg-red-800 text-white my-2 rounded-md">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
