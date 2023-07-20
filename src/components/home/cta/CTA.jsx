import React from 'react'
import {Link} from 'react-router-dom'
import "./cta.scss"


const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1AouKKD_Paqwmx2jnN0exTTymSGWTfVNC/view?usp=sharing" target="_blank" className='resume' download id="downloadCv">Download CV</a>
        <a href='#' className='contact' id="letsTalk">Let's Talk</a>
    </div>
  )
}

export default CTA 