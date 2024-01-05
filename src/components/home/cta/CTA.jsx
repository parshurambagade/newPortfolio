import React from 'react'
// import "./cta.scss"
// import resume from "../../../img/Resume.pdf"s
const resume = "https://bit.ly/parshuram-resume";

const CTA = () => {
  return (
    <div className='flex  gap-10'>
        <a href={resume} id="downloadCv" className='border border-blue-400 p-4 rounded-lg text-blue-400 text-xl hover:bg-blue-300 transition duration-500 hover:text-slate-900'>Download CV</a>
        <a href='mailto:parshuram.bagade@outlook.com' className='bg-blue-400 p-4 rounded-lg text-slate-900 text-xl hover:bg-blue-300 transition duration-100' id="letsTalk">Let's Talk</a>
    </div>
  )
}

export default CTA 