import React from "react";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import UserLogin from './pages/UserLogin.jsx'
import CaptainSignup from "./pages/CaptainSignup.jsx";
import Captainlogin from "./pages/Captainlogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import Start from "./pages/Start.jsx";
import UserProtectedWrapper from "./pages/UserProtectedWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";
import Riding from "./pages/Riding.jsx";

//! 5:27 se dekha hai 
//! pop up button create karna hai

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
      <Routes
        path="/captain/logout"
        element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
          </CaptainProtectedWrapper>
        }
      />
    </div>
  );

};

export default App;
