import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/captain-login');
        }
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem('token');
        navigate('/captain-login');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [navigate]);

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center text-xl font-semibold">Logging out...</div>;
  }

  return null; // no need to render anything if redirecting
};

export default CaptainLogout;
