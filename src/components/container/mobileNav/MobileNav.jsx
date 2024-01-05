import React from 'react';
import './mobileNav.scss';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {MdComputer} from 'react-icons/md';
import {CgMenuGridO} from 'react-icons/cg';
import {useState} from 'react';


const MobileNav = () => {

  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
    <nav>
      <div className="links-container">
        <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
        <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><MdComputer/></a>
        <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><CgMenuGridO/></a>
      
      </div>
    </nav>
    </>
  )
}

export default MobileNav
