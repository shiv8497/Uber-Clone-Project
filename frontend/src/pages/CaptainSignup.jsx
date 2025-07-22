import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [userData, setUserData] = useState({});f
  const [vehiclecolor, setVehicleColor] = useState("");
  const [vehicleplate, setVehiclePlate] = useState("");
  const [vehiclecapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler =  async(e) => {
    e.preventDefault();
    
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehiclecolor,
        plate: vehicleplate,
        capacity: vehiclecapacity,
        vehicleType: vehicleType,
      },
    };
         const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)
          if(response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);    
            localStorage.setItem("token", data.token);
            navigate("/captain-home");
          }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
  };
  return (
    <div>
      <div className="px-6 p-3 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-3"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg   font-medium mb-2">
              What's our Captain name
            </h3>
            <div className="flex gap-4 mb-4">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>

            <input
              className="bg-[#eeeeee] mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              placeholder="password"
            />
            <h3 className="text-lg  font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4">
              <input
              className="bg-[#eeeeee] w-1/2 mb-4 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              value={vehiclecolor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              className="bg-[#eeeeee] w-1/2 mb-4 rounded-lg px-4  border  text-lg placeholder:text-base"
              value={vehicleplate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              type="text"
              placeholder="Vehicle Plate Number"
            />
           </div>
           <div className="flex gap-4">
             <input
              className="bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
              value={vehiclecapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              type="number"
              min="1"
              placeholder="Vehicle Capacity"
            />
            <select
              className="bg-[#eeeeee]  rounded-lg px-4  border w-1/2 text-lg"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
           </div>
            
            <div className="flex ">
                   <button type="submit"
                  
              onClick={(e) => submitHandler(e)}
              className="bg-[#111] text-white  font-semibold  rounded-lg px-4 py-2 w-full text-lg placeholder:text-base mt-10"
              // style={{ marginBottom: "30px" }}
            >
              Create Captain account
            </button>
            </div>
                 
         
          
          </form>
          <p className="text-center mt-2 ">
            Already have a account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
        <div>
              <p className="text-[10px] mt-5 leading-tight">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy</span> and{" "}
              <span className="underline">Terms of Service apply</span>.
              </p>
            </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
