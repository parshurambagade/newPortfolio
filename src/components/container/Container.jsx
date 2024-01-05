import React from 'react'
// import "./container.scss"
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Home from '../home/Home'
import MobileNav from './mobileNav/MobileNav'
import CustomCursor from '../CustomCursor'

const Container = () => {
  return (
    <div className="flex bg-[#021934] bg-gradient-to-r from-black from-10% via-sky-950 via-40% to-slate-950 to-90%  text-slate-400">
      <CustomCursor />
    <div className="hidden">  
      <MobileNav /> 
    </div>
    <div id="home" className='w-2/5 flex z-10'>
      <Home />
    </div>
    <div id='container' className="w-3/5  ">
        <div className="about-div">
        <About />
        </div>
        <div className="skills-div">
        <Skills />
        </div>
        <div className="projects-div">
        <Projects />
        </div>
        
    </div>
    </div>
  )
}

export default Container