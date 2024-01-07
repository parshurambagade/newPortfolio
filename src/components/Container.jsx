
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Home from './Home'
import MobileNav from './MobileNav'


const Container = () => {
  return (
    <div className="flex bg-gradient-to-r from-[#021934] from-10% via-black via-40% to-[#021934] to-90%  text-slate-400"> 
    <div className="hidden">  
      <MobileNav />   
    </div>
    <div id="home" className='w-2/5 flex z-10'>
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