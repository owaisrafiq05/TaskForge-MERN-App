import React from "react";
import Img1 from "../../public/to-do-list.png";
import Img2 from "../../public/avatar.jpeg";
import TechStack from "./techStack.jsx";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      {/* 1st hero section */}
      <div className="w-full h-100 flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:w-[40%] w-full text-center md:text-left flex flex-col gap-y-8">
          <h1 className="text-white text-7xl font-extrabold"> Task Forge</h1>
          <h1 className="text-white text-4xl font-bold">
            {" "}
            A <span className="text-red-500">MERN</span> Powered Dynamic
            Application
          </h1>
        </div>
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <Tilt>
            <img src={Img1} alt="To-do list" className="w-[80%] md:w-full" />
          </Tilt>
        </div>
      </div>

      {/* 2nd hero section */}
      <div className="mt-[20vh] w-full">
        <div className="w-full text-center">
          <h1 className="text-6xl font-bold text-white">Tech Stack</h1>
          <br />
          <br />
          <div className="w-[100%] m-0 flex">
            <TechStack />
          </div>
        </div>
      </div>

      {/* 3rd hero section */}
      <div className="mt-[20vh] w-full inline-block md:flex md:justify-evenly md:items-center ">
        <div className="w-[80%] mx-auto md:mx-0 md:w-[32vw] md:h-[32vw] rounded-full overflow-hidden flex items-center justify-center">
          <img src={Img2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[100%] md:w-[40%] flex flex-col gap-y-4 mt-[7vh] md:mt-0 text-center">
          <h1 className="md:text-6xl text-7xl text-white font-extrabold">
            Meet The Developer
          </h1>
          <h1 className="md:text-6xl text-7xl text-red-600 font-extrabold">
            Owais Rafiq
          </h1>
          <h1 className="md:text-4xl text-5xl text-yellow-600 font-extrabold">
            MERN Stack Developer || Experienced Frontend Developer
          </h1>
          <br />
          <br />
          <div className="flex justify-center items-center space-x-16">
            <div className="group relative flex items-center justify-center w-16 h-16">
              <a
                href="https://github.com/owaisrafiq05"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative">
                  <svg
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-14 h-14 hover:scale-125 duration-200 hover:stroke-blue-500"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </button>
              </a>
              <span
                className="absolute -top-14 left-1/2 transform -translate-x-1/2
          z-20 origin-bottom scale-0 px-3 rounded-lg border 
          border-gray-300 bg-white py-2 text-sm font-bold
          shadow-md transition-all duration-300 ease-in-out 
          group-hover:scale-100"
              >
                GitHub
              </span>
            </div>

            <div className="group relative flex items-center justify-center w-16 h-16">
              <a
                href="https://www.linkedin.com/in/owais-rafiq-639494253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    className="w-14 h-14 hover:scale-125 duration-200 hover:stroke-blue-500"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0078d4"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                    ></path>
                    <path
                      d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                    ></path>
                  </svg>
                </button>
              </a>
              <span
                className="absolute -top-14 left-1/2 transform -translate-x-1/2
          z-20 origin-bottom scale-0 px-3 rounded-lg border 
          border-gray-300 bg-white py-2 text-sm font-bold
          shadow-md transition-all duration-300 ease-in-out 
          group-hover:scale-100"
              >
                Linkedin
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white mt-16 mb-8 font-extrabold text-2xl w-[100%] text-center">
        Copyright &#169; 2024 || Made with &#x2764;	 by Owais Rafiq
      </div>

    </div>
  );
};

export default About;
