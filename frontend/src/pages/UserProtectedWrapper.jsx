import { UserDataContext } from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect , useContext , useState } from "react";
import axios from "axios";
const UserProtectedWrapper = ({ children }) => {
  //children ka use hota hai ki jo bhi component iske andar likha hoga wo render hoga
  // const {user} = useContext(UserDataContext); // user ke ana upar depends na hoke ham token ke upar depend ho rahe hai tako user relod be kare toh token se identfiy kar sake ki login hai nahi

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
const { user, setUser } = useContext(UserDataContext); // UserDataContext se user aur setUser ko import karte hai

const [isLoading, setIsLoading] = useState(true); 

     
  useEffect(() => {
    if (!token) {
      navigate("/login");
     
    }
  }, [token]); // useEffect ka use hota hai ki jab bhi token change ho toh navigate kare login page pe
  // agar token nahi hai toh login page pe redirect karega
 
  axios.get(`{$import.meta.env.VITE_BASE_URL}/user/profile`, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    if(response.status === 200){
      setUser(response.data.user); // agar response status 200 hai toh user ko set karega
      setIsLoading(false); // loading ko false karega
    }
  }).catch(error => {
    console.log(error);
    localStorage.removeItem("token"); // agar error aata hai toh token ko remove karega
    navigate("/login"); // aur login page pe redirect karega
  });

  if(isLoading){
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default UserProtectedWrapper;
