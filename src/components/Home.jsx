import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import CTA from './CTA'
import HomeSocials from './HomeSocials'
// import "./home.scss"
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [activeNav, setActiveNav] = useState("#about");

  return (
    <section id="home" className="fixed flex flex-col   h-full  justify-center ml-20 gap-28">
    <div className='flex flex-col gap-7'>
      <div className="font-bold flex gap-4 flex-col">
        <h5 className="text-3xl">Hey👋 I am</h5>
        <h2 className="text-6xl text-blue-400" >Parshuram Bagade</h2>
        <div className='roles'>
          <span id="heading-1" className="text-3xl text-white" >
            <Typewriter
              words={['Fullstack Developer', 'JavaScript Developer', 'Freelance Web Developer', 'ReactJS Developer', 'MERN Developer']}
              loop={true}
              cursor
              cursorColor="red"
              cursorStyle='<'
              typeSpeed={30}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>

      {/*CTA goes here*/}
      <div className="my-6">
        <CTA />
      </div>  
    </div>  

    {/* NAVBAR SECTION */}
    <div className="text-xl">
        <div className="flex flex-col gap-12 ">
          <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === '#about' ? 'active text-white ' : 'hover:text-blue-300'}><span className={activeNav === "#about" ? "visible mr-4 tracking-widest" : "hidden"}>--------</span><span>About</span></a>
          <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === '#skills' ? 'active text-white' : 'hover:text-blue-300'}><span className={activeNav === "#skills" ? "visible mr-4 tracking-widest" : "hidden"}>--------</span><span>Skills</span></a>
          <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav === '#projects' ? 'active text-white' : 'hover:text-blue-300'}><span className={activeNav === "#projects" ? "visible mr-4 tracking-widest" : "hidden"}>--------</span><span>Projects</span></a>

        </div>
    </div>

      {/*Socials go here*/}
      <div className="socials">
        <HomeSocials/>
      </div>
    
   </section>
  )
}

export default Home