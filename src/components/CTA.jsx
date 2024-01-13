import React from 'react'
// import "./cta.scss"
// import resume from "../../../img/Resume.pdf"s
const resume = "https://bit.ly/parshuram-resume";

const CTA = () => {
  return (
    <div className='xs:flex xs:w-9/12 xs:flex-col xs:justify-center xs:items-center xs:flex-wrap md:w-full md:flex-row md:gap-6 lg:flex lg:gap-6 lg:flex-row lg:justify-start  xl:gap-8 xs:gap-4'>
        <a href={resume} id="downloadCv" className='xs:rounded-lg xs:p-2 xs:w-full xs:text-sm  xs:px-4 md:w-[40%] md:rounded-lg md:text-base  border border-blue-400 lg:p-4 lg:rounded-xl lg:w-[40%] lg:text-sm xl:w-[35%] text-blue-400 hover:bg-blue-300 transition duration-500 hover:text-slate-900'>Download CV</a>
        <a href='mailto:parshuram.bagade@outlook.com' className='xs:rounded-lg xs:p-2 xs:w-full xs:px-4 xs:text-sm md:w-[40%] md:rounded-lg md:text-base  bg-blue-400 lg:p-4  lg:rounded-xl lg:w-[40%] lg:text-sm xl:w-[35%] text-slate-900  hover:bg-blue-300 transition duration-100' id="letsTalk">Let's Talk</a>
    </div>
  )
}

export default CTA 