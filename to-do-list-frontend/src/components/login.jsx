import React from 'react';
import "./login.css"
import { Link } from "react-router-dom"; // Import the Link component
import { useState } from 'react';

const Login = () => {

    const [input, setInput] = useState("");

    return (
        <div className="w-screen flex justify-center items-center h-full">
            <div className='w-[80%] md:w-[30%] sm:w-[50%] h-[100%]'>
                <form className="form">
                    <div className="title">Welcome,<br /><span >Log In To Continue</span></div>
                    <input type="email" placeholder="Email" name="email" className="input" />
                    <input type="password" placeholder="Password" name="password" className="input" />
                    <h2>
                        <Link to="/signup" className="flex items-center text-gray-600 text-md md:text-lg font-bold pt-2 link">
                            Don't Have a Account? Sign In &#x2192;
                        </Link>
                    </h2>
                    <button className="button-confirm">Let`s go →</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
