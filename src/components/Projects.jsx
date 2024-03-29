import projects from "../assets/projects.js";
import ProjectInfo from "./ProjectInfo.jsx";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Projects = () => {    
  return (
    <div id='projects' className="xs:py-12 xs:mx-0 md:pt-20 lg:pt-24 py-20 mr-20">
      <div className='font-bold text-center xs:my-2  my-8'>
        <h2 className='xs:text-3xl md:text-4xl md:mb-6 text-4xl text-blue-400'>Projects</h2>
      </div>  

      <div className="flex flex-col gap-8 xs:gap-2">
        {projects?.data.map(project => (
          <ProjectInfo key={project.id} img={project.img} title={project.title} subtitle={project.subtitle} liveUrl={project.liveUrl} codeUrl={project.codeUrl} techstack={project.techstack} desc={project.desc} />
        ))} 
        <Link to="/all-projects" className="xs:text-sm xs:justify-center sm:text-lg lg:justify-start lg:my-4 text-slate-400 px-4 capitalize text-lg flex items-center hover:text-blue-100 hover:underline underline-offset-8 gap-2"><span>View all projects</span> <span><FaArrowRight /></span></Link>
      </div>
    </div>
  );
}

export default Projects;
