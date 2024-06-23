import React, { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import Otp from "./components/otp.jsx";
import Home from "./components/home.jsx";
import { StickyNavbar } from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./components/about.jsx";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const checkStatus = () => {
    var user = localStorage.getItem("userID");
    if (user) {
      // localStorage.setItem("uid", user);
      // localStorage.setItem("userID", "true");
      setIsAuth(true);
      toast.success("User is Logged In Successfully", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, [isAuth]);

  return (
    <div className="p-0 m-0 w-full h-full bg-black parent inline-block">
      <ToastContainer />
      <StickyNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/about" element={<About/>}/>
        {!isAuth && (
          <>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/signup" element={<SignUp setIsAuth={setIsAuth} />} />
          </>
        )}
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </div>
  );
};

export default App;
