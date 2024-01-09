
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Home from './Home'
import MobileNav from './MobileNav'


const Container = () => {
  return (
    <div className="lg:flex xl:flex xl:flex-wrap bg-gradient-to-r from-[#021934] from-10% via-black via-40% to-[#021934] to-90%  text-slate-400 xs:px-12 xl:w-[100vw] lg:w-[100vw] xs:w-[100vw]"> 
    <div className="hidden">  
      <MobileNav />   
    </div>
    <div id="home" className='lg:w-[40%] xs:w-[100vw] xl:w-[40%]  lg:z-10 xl:z-10'>
      <Home />
    </div>
    <div id='container' className="w-3/5  ">
        <div className="about-div">
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