import { Navbar } from "./components/navbar";
import { LandingPage } from "./pages/landingPage";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Dashboard from "./components/dashboard";

export const App = () => { 
  const existedUser = useSelector((state) => state);
  console.log(existedUser);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/admin" element={<Login/>} />
        {existedUser.isadmin? (
          <Route path="/dashboard" element={<Dashboard/>}/>
        ) : null}
      </Routes>
      </BrowserRouter>

    </>
  );
};
