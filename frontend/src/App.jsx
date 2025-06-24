import React from "react"
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Home from "./Home";
import AdminLogin from "./components/Login";
import Navbar from "./components/navbar";

function App() {

  return (
   <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AdminLogin />} />
      </Routes>

      </BrowserRouter>
   </>
  )
}

export default App
