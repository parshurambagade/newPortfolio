import React from 'react'
import "./container.scss"
import About from './about/About'
import Skills from './skills/Skills'

const Container = () => {
  return (
    <div id='container'>
        <div className="about-div">
        <About />
        </div>
        <div className="skills-div">
        <Skills />
        </div>
        
    </div>
  )
}

export default Container