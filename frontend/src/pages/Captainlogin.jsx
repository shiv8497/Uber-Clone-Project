import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext.jsx'
import { useContext } from 'react'  
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const {captain , setCaptain} = useContext(CaptainDataContext);
   const navigate  = useNavigate()
 
  const submitHandler = async (e) => {
    e.preventDefault()
  
    const captainData = {
      email: email,
      password: password,
    } 
 const response =  await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captainData)
  if(response.status === 200){
    const data = response.data;
    setCaptain(data.captain)
    localStorage.setItem('token', data.token)
    navigate('/captain-home')
  }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex-col flex justify-between">
      <div>
        <img
          className="w-22 mb-5"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Logo"
        />

        <form onSubmit={e => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-orange-400 transition"
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
          className="w-full  p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-orange-400 transition"
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
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600 mt-2 font-medium inline-block">
            Register as a Captain
            </Link>{" "}
          </p>
        </form>
      </div>
      <div>
        <Link to='/login' className="bg-[#d5622d] flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
          Sign in as User
        </Link>
      </div>
    </div>
  );
};


export default Captainlogin