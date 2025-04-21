import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singnup from './components/Singnup'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Singnup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App