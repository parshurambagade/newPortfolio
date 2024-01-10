import React from 'react'
// import "./cta.scss"
// import resume from "../../../img/Resume.pdf"s
const resume = "https://bit.ly/parshuram-resume";

const CTA = () => {
  return (
    <div className='xs:flex xs:w-9/12 xs:flex-col xs:justify-center xs:items-center xs:flex-wrap lg:flex lg:gap-10 xl:flex xl:gap-10   xs:gap-4 xl:w-full'>
        <a href={resume} id="downloadCv" className='xs:p-2 xs:w-full xs:text-sm  lg:w-6/12 xs:px-4 xl:w-max border border-blue-400 lg:p-4 xl:p-4 lg:rounded-lg text-blue-400 lg:text-xl hover:bg-blue-300 transition duration-500 hover:text-slate-900'>Download CV</a>
        <a href='mailto:parshuram.bagade@outlook.com' className='xs:p-2 xs:w-full xs:px-4 xs:text-sm  lg:w-max xl:w-max bg-blue-400 lg:p-4 xl:p-4 lg:rounded-lg text-slate-900 lg:text-xl hover:bg-blue-300 transition duration-100' id="letsTalk">Let's Talk</a>
    </div>
  )
}

export default CTA 