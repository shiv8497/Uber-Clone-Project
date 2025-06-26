import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null)
  const panelCloseRef = useRef(null);
  const confrimRidePanelRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setconfirmRidePanel] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity:1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          // opacity:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function(){ 
  if(vehiclePanel){
 gsap.to(vehiclePanelRef.current, {
     transform: "translateY(0)",
   });
  }else {
    gsap.to(vehiclePanelRef.current, {
      transform: "translateY(100%)",
    });
  }
  
 },[vehiclePanel])

 useGSAP(function(){ 
  if(confirmRidePanel){
 gsap.to(confrimRidePanelRef.current, {
     transform: "translateY(0)",
   });
  }else {
    gsap.to(confrimRidePanelRef.current, {
      transform: "translateY(100%)",
    });
  }
  
 },[confirmRidePanel])

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-18 absolute left-5 top-5 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />

        <div className="h-screen w-screen">
          {/* image for temprory */}
          <img
            className="h-full w-full object-cover"
            src="https://i2-prod.mylondon.news//article16106961.ece/ALTERNATES/s1200b/2_Uber-pink-cars.jpg"
            alt="map photo"
          />
        </div>
        <div className=" h-screen flex flex-col justify-end absolute gap-5 top-0 w-full">
          <div className="h-[30%] p-6 relative bg-white">
            <h5
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
              className="top-6 opacity-0 absolute right-7  text-2xl"
            >
              <i className="ri-arrow-down-wide-fill"></i>
            </h5>

            <h4 className="text-3xl font-semibold">Find a trip</h4>
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-black rounded-full"></div>
              <input
                className="bg-[#eee] mt-4 w-full px-12 py-2 text-base rounded-lg"
                type="text"
                value={pickup}
                onClick={() => setPanelOpen(true)}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Add a pickup location"
              />
              <input
                className="bg-[#eee] mt-3 w-full px-12 py-2 text-base rounded-lg"
                type="text"
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter your destination"
              />
            </form>
          </div>

          <div ref={panelRef} className=" bg-white  h-0">
            <LocationSearchPanel setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel} />
          </div>
        </div>

           <div ref={vehiclePanelRef} className="fixed w-full gap-3 translate-y-full bg-white z-10 bottom-0 px-4 py-8 pt-12">
             
             <VehiclePanel setconfirmRidePanel={ setconfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            
           </div>

            <div ref={confrimRidePanelRef} className="fixed w-full gap-3 translate-y-full bg-white z-10 bottom-0 px-3 py-6 pt-12">
             
             <ConfirmRide/>
            
           </div>

      </div>
    </>
  );
};

export default Home;
