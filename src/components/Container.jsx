
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Home from './Home'
import MobileNav from './MobileNav'


const Container = () => {
  return (
    <div className="flex xs:px-4 xs:flex-col xs:w-full xs:overflow-auto xs:pb-28 sm:px-6 md:px-12  lg:px-20 lg:flex lg:flex-row lg:justify-between  bg-gradient-to-r from-[#021934] from-10% via-black via-40% to-[#021934] to-90%  text-slate-400 lg:w-full ">   
    <div className="lg:hidden">  
      <MobileNav />   
    </div>
    <div id="home" className='lg:w-[40%] xs:w-full   lg:z-10'>
      <Home />
    </div>
    <div id='container' className="xs:w-full lg:w-[60%]  ">
        <div className="about-div ">
        <About />
        </div>
        <div className="skills-div">
        <Skills />
        </div>
        <div className="projects-div">  
        <Projects />
        </div>
        
    </div>
    </div>
  )
}

export default Container