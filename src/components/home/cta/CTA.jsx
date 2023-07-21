import React from 'react'
import "./cta.scss"
import resume from "../../../img/Resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} className='resume' download id="downloadCv">Download CV</a>
        <a href='mailto:parshurambagade855@gmail.com' className='contact' id="letsTalk">Let's Talk</a>
    </div>
  )
}

export default CTA 