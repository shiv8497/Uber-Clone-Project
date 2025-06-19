import React, { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useContext , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainProtectedWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
   const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading , setIsLoading] = useState(true);
    useEffect(() => {
      if (!token) {
        navigate('/captain-login');
      }
    }, [token]);
    
    axios.get(`{$import,eta.env.VITE_BASE_URL}/captain/profile`, {
        headers:{
            Authorizations: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status === 200){
            setCaptain(response.data.captain);
            setIsLoading(false);

        }
    }).catch(error =>{
        console.log(error)
        localStorage.removeItem('token');

        navigate('/captain-login');
    })

    if(isLoading){
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
    }


  return (
    <div>{children}</div>
  )
}

export default CaptainProtectedWrapper