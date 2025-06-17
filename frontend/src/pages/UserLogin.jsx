import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const UserLogin = () => {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData , setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email: email,
      password: password
    })

    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex-col flex justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />

        <from onSubmit={e => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-blue-500 transition"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <h3 className=" text-lg font-medium mb-2 mt-3">
            What's your password
          </h3>
          <input
          className="w-full  p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-blue-500 transition"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          ></input>
          <button onClick={e => submitHandler(e)} className="bg-[#111] text-white font-semibold mt-3 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
            Login
          </button>
          <p className="text-center ">
            New here?{" "}
            <Link to="/signup" className="text-blue-600 mt-1 inline-block">
              Create New Account
            </Link>{" "}
          </p>
        </from>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
          Sign in as  Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
