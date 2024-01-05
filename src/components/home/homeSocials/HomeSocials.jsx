import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import "../homeSocials/homeSocials.scss"

const HeaderSocials = (props) => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/parshuram-bagade-77049725a/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/musical_parshh/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/parshurambagade/" target="_blank"><BsGithub/></a>
        <a href="mailto:parshurambagade855@gmail.com"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials