import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-gray-200 text-3xl"></i>
      </h5>
      <h3 className="text-2xl font-bold mb-5">New Ride Available!</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object cover"
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
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2  border-gray-300">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya talab,Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className=" text-lg ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹500</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash cash</p>
            </div>
          </div>
        </div>
      </div>
     <div className='mt-5 w-full '>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        // props.confirmRide()

                    }} className=' bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg'>Accept</button>

                    <button onClick={() => {
                        props.setRidePopupPanel(false)

                    }} className='mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg'>Ignore</button>


                </div>
    </div>
  );
};

export default RidePopUp;
