import React from 'react'
import "remixicon/fonts/remixicon.css";
const LocationSearchPanel = (props) => {

const locations = [
  "H.No. 123, Sector C, Indrapuri, Near BHEL Gate No.2, Bhopal, Madhya Pradesh - 462022",
  "Flat No. 402, Shree Krishna Residency, Kolar Road, Opp. Aura Mall, Bhopal, Madhya Pradesh - 462042",
  "17/A, Professor Colony, Shivaji Nagar, Near Board Office Square, Bhopal, Madhya Pradesh - 462016",
  "Plot No. 89, Arera Colony, Near Habibganj Railway Station",
 
];
  return (
    <div>
              {/* This is just a sample data */}
 
              {
                locations.map((elem , idx)=>{
                  return  <div key={idx} onClick={() =>{
                  props.setVehiclePanel(true) 
                  props.setPanelOpen(false) }} className='flex gap-4 border-2 p-3 border-gray-50 rounded-xl active:border-black items-center my-2 justify-start'>
              <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-line text-xl font-medium"></i></h2>
              <h4 className='text-base font-medium'>{elem}</h4>
              </div>
                })
              }

             
          

      </div>
  )
}

export default LocationSearchPanel