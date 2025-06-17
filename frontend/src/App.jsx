import React from 'react'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import UserLogin from './pages/UserLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/captain-login' element={<Captainlogin/>} />
      </Routes>
      
    </div>
  )
}

export default App