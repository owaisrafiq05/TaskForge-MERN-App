import React from 'react'
import Img1 from '../../public/to-do-list.png';
import TechStack from "./techStack.jsx";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className='w-full h-full overflow-hidden'>

      {/* 1st hero section */}
      <div className='w-full h-100 flex flex-col md:flex-row justify-evenly items-center'>
        <div className='md:w-[40%] w-full text-center md:text-left flex flex-col gap-y-8'>
          <h1 className='text-white text-7xl font-extrabold'> Task Forge</h1>
          <h1 className='text-white text-4xl font-bold'> A <span className='text-red-500'>MERN</span> Powered Dynamic Application</h1>
        </div>
        <div className='md:w-[30%] w-full flex justify-center items-center'>
          <Tilt>
            <img src={Img1} alt="To-do list" className='w-[80%] md:w-full' />
          </Tilt>
        </div>
      </div>

      {/* 2nd hero section */}
      <div className='mt-[25vh] w-full'>
        <div className='w-full text-center'>
          <h1 className='text-4xl font-bold text-white'>Tech Stack</h1>
          <div className='w-[100%] m-0'>
            <TechStack/> 
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
