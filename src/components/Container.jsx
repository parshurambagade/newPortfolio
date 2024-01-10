
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Home from './Home'
import MobileNav from './MobileNav'


const Container = () => {
  return (
    <div className="flex xs:px-4 xs:flex-col xs:pb-28 xl:flex-wrap bg-gradient-to-r from-[#021934] from-10% via-black via-40% to-[#021934] to-90%  text-slate-400 xl:w-[100vw] lg:w-[100vw] xs:w-full xs:overflow-auto">   
    <div className="hidden">  
      <MobileNav />   
    </div>
    <div id="home" className='lg:w-[40%] xs:w-full xl:w-[40%]  lg:z-10 xl:z-10'>
      <Home />
    </div>
    <div id='container' className="xs:w-full w-3/5  ">
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