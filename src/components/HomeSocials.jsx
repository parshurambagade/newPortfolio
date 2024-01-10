import React from 'react'
import {BsLinkedin, BsGithub, BsTwitterX} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
// import "../homeSocials/homeSocials.scss"

const HeaderSocials = () => {
  return (
    <div className='header-socials xs:w-9/12 xs:justify-center xs:gap-20 xs:flex-wrap p-4 xs:text-2xl flex gap-28  text-[2rem] '>
        <a href="https://www.linkedin.com/in/parshuram-bagade-77049725a/" target="_blank" className="hover:text-blue-400 transition duration-75"><BsLinkedin/></a>
        {/* <a href="https://www.instagram.com/musical_parshh/" target="_blank" className="hover:text-blue-400 transition duration-75"><BsInstagram/></a> */}
        <a href="https://github.com/parshurambagade/" target="_blank" className="hover:text-blue-400 transition duration-75"><BsGithub/></a>
        <a href="https://twitter.com/CodeWithParshu" target="_blank" className="hover:text-blue-400 transition duration-75"><BsTwitterX /></a>
        <a href="mailto:parshuram.bagade@outlook.com" className="hover:text-blue-400 transition duration-75"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials