import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import CTA from './cta/CTA'
import HomeSocials from './homeSocials/HomeSocials'
import "./home.scss"
import {useState} from 'react';

const Home = () => {

  const [activeNav, setActiveNav] = useState("#about");

  return (
    <section id="home">
    <div className='content-container'>
      <div className="heading-text">
        <h5>Hey👋 I am</h5>
        <h2>Parshuram Bagade</h2>
        <div className='roles'>
          <span id="heading-1" >
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
      <div className="cta-container">
        <CTA />
      </div>  
    </div>

    {/* NAVBAR SECTION */}
    <div className="navbar">
        <div className="nav-links">
          <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><span className='nav-line'></span><span>About</span></a>
          <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === '#skills' ? 'active' : ''}><span className='nav-line'></span><span>Skills</span></a>
          <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav === '#projects' ? 'active' : ''}><span className='nav-line'></span><span>Projects</span></a>

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