import React from 'react'
import { Link } from 'react-router-dom'
// import CaptainDetails from '../components/CaptainDetails'
// import RidePopUp from '../components/RidePopUp'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
// import { useEffect, useContext } from 'react'
// import { SocketContext } from '../context/SocketContext'
// import { CaptainDataContext } from '../context/CapatainContext'
// import axios from 'axios'

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <div className="flex items-center justify-between">
          <div className='flex items-center  justify-start gap-3'>
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://img.freepik.com/free-photo/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.jpg?semt=ais_hybrid&w=740"
              alt="driver photo"
            />
            <h4 className="text-lg font-medium">Shivam</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">$295.20</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

          <div className="flex justify-center  mt-6 p-5 bg-gray-100 rounded-xl  gap-5 items-start">
            <div className="text-center">
              <i className="text-3xl font-thin  ri-timer-2-line" />
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xl font-thin  ri-speed-up-line" />
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xl font-thin  ri-booklet-line" />
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default CaptainHome