import React from 'react';
import "./login.css"
import { base_url } from '../../config/index.js'
import { Link } from "react-router-dom"; // Import the Link component
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { ToastContainer ,toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");


    const LoginFunc = async (e) => {
        e.preventDefault();
        try {
            const obj = {
                email: mail,
                password: pass
            }
            const response = await axios.post(`${base_url}/api/login`, obj);
            console.log(response);
            if(response.data.status == true){
            console.log("response", response);
            toast.success('User Successfully Logged In', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
            });
            localStorage.setItem('userID', response.data.data._id);
                setPass("");
                setMail("");
                navigate("/");
            }
            else if(response.data.status == false){
                throw new Error(response.data.message);
            }
        }
        catch (error) {
            console.log("Error", error.message);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    const checkStatus =  () => {
        var status = localStorage.getItem('otpStatus');
        if (status === "Success") {
            localStorage.removeItem('otpStatus');
            toast.success('OTP Successfully Verified, Now Login to the Account', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else if (status === "Error"){
            toast.error('OTP Not Verified', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        else{}
    };

    useEffect(() => {
        checkStatus();
    }, []); 
    
    return (
        <div className="w-screen flex justify-center items-center h-full">
            <ToastContainer/>
            <div className='w-[80%] md:w-[30%] sm:w-[50%] h-[100%]'>
                <form className="form" onSubmit={LoginFunc}>
                    <div className="title">Welcome,<br /><span >Log In To Continue</span></div>
                    <input type="email" placeholder="Email" name="email" className="input" onChange={(e) => setMail(e.target.value)}/>
                    <input type="password" placeholder="Password" name="password" className="input" onChange={(e) => setPass(e.target.value)}/>
                    <h2>
                        <Link to="/signup" className="flex items-center text-gray-600 text-md md:text-lg font-bold pt-2 link">
                            Don't Have a Account? Sign In &#x2192;
                        </Link>
                    </h2>
                    <button className="button-confirm" type='submit'>Let`s go →</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
