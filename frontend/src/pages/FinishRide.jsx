import React from 'react'
import { Link } from 'react-router-dom';
const FinishRide = (props) => {
    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setFinishRidePanel(false);
                }}
            >
                <i className="ri-arrow-down-wide-line text-gray-200 text-3xl"></i>
            </h5>
            <h3 className="text-2xl font-bold mb-3">Finish this Ride</h3>
            <div className="flex items-center justify-between p-4 border-2 border-amber-400 bg-yellow-400 rounded-lg mt-3">
                <div className="flex items-center gap-3">
                    <img
                        className="w-9 h-9 rounded-full object cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XXeXnBqbcP1J_In8jmKYX8WIKj9oUUy5QA&s"
                        alt="user pic"
                    />
                    <h2 className="text-lg font-semibold">Harshi Patel</h2>
                </div>
                <h5 className="text-lg font-medium">2.2 KM</h5>
            </div>
            <div className="flex justify-between flex-col gap-2 items-center">
                <img
                    className="h-22"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
                    alt="car logo"
                />
                <div className="w-full mt-2">
                    <div className="flex items-center gap-4 p-3 border-b-2  border-gray-300">
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">
                                Kankariya talab,Bhopal
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 border-b-2 border-gray-300">
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">
                                Kankariya talab,Bhopal
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 ">
                        <i className=" text-lg ri-money-rupee-circle-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹500</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash cash</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-1 w-full">



                <Link
                    to="/captain-home"
                    className="w-full mt-4 bg-green-600 text-white font-bold text-lg flex justify-center p-3 rounded-lg"
                >
                    Finish Ride
                </Link>
                <p className='text-red-500 mt-6 text-sm'>Click on finish ride button if you have completed the payment</p>



            </div>
        </div>
    )
}

export default FinishRide