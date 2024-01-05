import React from 'react'
import "./container.scss"
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Home from '../home/Home'
import MobileNav from './mobileNav/MobileNav'

const Container = () => {
  return (
    <>
    <div className="nav-div">
      <MobileNav />
    </div>
    <div id="home" className='home-div'>
      <Home />
    </div>
    <div id='container'>
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
    </>
  )
}

export default Container