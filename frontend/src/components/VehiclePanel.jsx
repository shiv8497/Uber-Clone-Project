import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
       
        className="p-1 text-center absolute w-[93%] top-0"
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-300"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => props.setconfirmRidePanel(true)}
        className="flex border-2 bg-gray-50  border-transparent active:border-black  mb-2 rounded-xl  w-full p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="car logo"
        />
        <div className=" w-1/2">
          <h4 className="font-semibold text-lg">
            UberGo
            <span>
              <i className="ri-user-3-line">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-500">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="font-semibold text-lg">₹500.93</h2>
      </div>
      <div
        onClick={() => props.setconfirmRidePanel(true)}
        className="flex border-2 bg-gray-50  border-transparent active:border-black  mb-2 rounded-xl  w-full p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="car logo"
        />
        <div className=" w-1/2">
          <h4 className="font-semibold text-lg">
            UberAuto
            <span>
              <i className="ri-user-3-line">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-500">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="font-semibold text-lg">₹300</h2>
      </div>

      <div
        onClick={() => props.setconfirmRidePanel(true)}
        className="flex border-2 bg-gray-50 border-transparent active:border-black mb-2 rounded-xl  w-full p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://toppng.com/uploads/preview/bike-png-11553947356dfqq39jvsi.png"
          alt="car logo"
        />
        <div className=" w-1/2">
          <h4 className="font-semibold text-lg">
            UberBike
            <span>
              <i className="ri-user-3-line">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-500">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="font-semibold text-lg">₹158</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
