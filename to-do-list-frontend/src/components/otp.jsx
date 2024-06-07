import React, { useEffect, useState } from "react";
import { base_url } from '../../config/index.js';
import "./otp.css";
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otp = () => {
    const [pass, setPass] = useState("");

    const OTPValidation = async (e) => {
        e.preventDefault();
        try {
            let mail = localStorage.getItem('emailAddress');
            const obj = {
                email: mail,
                otp: pass
            };
            const response = await axios.post(`${base_url}/api/otpverification`, obj);
            console.log(response);
            if (response.data.status === true) {
                console.log("response", response);
                toast.success('OTP Verified Successfully', {
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
            } else {
                throw new Error('Verification failed');
            }
        } catch (error) {
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
    };

    const checkStatus =  () => {
        var status = localStorage.getItem('otpStatus');
        if (status === "true") {
            localStorage.removeItem('otpStatus');
            toast.success('OTP Sent to your Email Successfully', {
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
        } else if (status === "false"){
            toast.error('OTP sending failed', {
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
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="w-screen flex justify-center items-center h-full">
            <ToastContainer />
            <div className='w-[80%] md:w-[50%] sm:w-[70%] h-[100%]'>
                <div className="flex items-center justify-center">
                    <div className="bg-gray-900 border-[4px] border-red-900 rounded-2xl hover:border-red-500 transition-all duration-200">
                        <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
                            <svg fill="#fff" className="h-12 w-12 text-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 191.667 191.667" xmlSpace="preserve">
                                <path d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z
                                 M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685
                                c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969
                                C156.146,65.765,156.146,74.362,150.862,79.646z" />
                            </svg>
                            <h1 className="text-white text-2xl">Enter The OTP</h1>
                            <input
                                className="w-full p-2 bg-white rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                                placeholder="Your OTP eg: 294362"
                                type="text"
                                name="otp"
                                onChange={(e) => setPass(e.target.value)}
                                id=""
                            />
                            <button
                                className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
                                onClick={OTPValidation}
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
