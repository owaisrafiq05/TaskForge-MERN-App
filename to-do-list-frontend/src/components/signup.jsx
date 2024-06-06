import React from 'react';
import { base_url } from '../../config/index.js'
import "./signup.css"
import { Link, useNavigate } from "react-router-dom"; // Import the Link component
import axios from "axios";
import { ToastContainer ,toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Signup = () => {


    const navigate = useNavigate() 

    const [user, setUser] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");


    const SignUpFunc = async (e) => {
        e.preventDefault();
        try {
            const obj = {
                username: user,
                email: mail,
                password: pass
            }
            const response = await axios.post(`${base_url}/api/signup`, obj);
            console.log(response);
            if(response.data.status == true){
            console.log("response", response);
            toast.success('User Successfully Added', {
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
                setUser("");
                setPass("");
                setMail("");
                navigate("/login");
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

    return (
        <div className="w-screen flex justify-center items-center h-full">
            <ToastContainer/>
            <div className='w-[80%] md:w-[30%] sm:w-[50%] h-[100%]'>
                <form className="form" onSubmit={SignUpFunc}>
                    <div className="title">Welcome,<br /><span >Sign Up To Continue</span></div>
                    <input type="text" placeholder="Username" name="username" className="input" onChange={(e) => setUser(e.target.value)} />
                    <input type="email" placeholder="Email" name="email" className="input" onChange={(e) => setMail(e.target.value)} />
                    <input type="password" placeholder="Password" name="password" className="input" onChange={(e) => setPass(e.target.value)} />
                    <h2>
                        <Link to="/login" className="flex items-center text-gray-600 text-md md:text-lg font-bold pt-2 link">
                            Already Have a Account? Log In &#x2192;
                        </Link>
                    </h2>
                    <button className="button-confirm" type='submit'>Let`s go →</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
