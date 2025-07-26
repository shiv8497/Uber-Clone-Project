import React from 'react'

const CaptainDetails = () => {
  return (
   
      <>
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
      
      </>

    
     
      
        
     
   
  )
}

export default CaptainDetails