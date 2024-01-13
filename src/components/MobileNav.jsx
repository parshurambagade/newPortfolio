import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {MdComputer} from 'react-icons/md';
import {CgMenuGridO} from 'react-icons/cg';
import {useState} from 'react';
import { IoCodeSlash } from "react-icons/io5";
import { BiCodeBlock } from "react-icons/bi";


const MobileNav = () => {

  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
    <nav className='lg:hidden   w-full flex justify-center '>
      <div className="sm:py-4 sm:text-xl sm:w-[70%] sm:bottom-16 sm:rounded-full md:w-1/2 links-container border border-gray-600 flex w-3/4 justify-evenly px-0 py-3 rounded-3xl bg-[#06122797] backdrop-blur-sm  fixed bottom-12 ">
        <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav === '#home' ? 'active text-white p-1 bg-slate-900 rounded-2xl' : 'bg-slate-900 rounded-2xl p-1'}><AiOutlineHome /></a>
        <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active text-white p-1 bg-slate-900 rounded-2xl" : "bg-slate-900 rounded-2xl p-1"}><AiOutlineUser/></a>
        <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ? "active text-white p-1 bg-slate-900 rounded-2xl" : "bg-slate-900 rounded-2xl p-1"}><IoCodeSlash/></a>
        <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav === "#projects" ? "active text-white p-1 bg-slate-900 rounded-2xl" : "bg-slate-900 rounded-2xl p-1"}><BiCodeBlock /></a>
      
      </div>
    </nav>
    </>
  )
}

export default MobileNav
