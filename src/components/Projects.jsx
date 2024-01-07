import projects from "../assets/projects.js";
import ProjectInfo from "./ProjectInfo.jsx";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Projects = () => {    
  return (
    <div id='projects' className="py-20 mr-20">
      <div className='font-bold text-center  my-8'>
        {/* <h5 className='text-2xl'>My recent work</h5> */}
        <h2 className='text-4xl text-blue-400'>Projects</h2>
      </div>  

      <div className="flex flex-col gap-8">
        {projects?.data.map(project => (
          <ProjectInfo key={project.id} img={project.img} title={project.title} subtitle={project.subtitle} liveUrl={project.liveUrl} codeUrl={project.codeUrl} techstack={project.techstack} desc={project.desc} />
        ))} 
        <Link to="/all-projects" className="text-white px-4 capitalize text-lg flex items-center hover:text-blue-200 hover:underline underline-offset-8 gap-2"><span>View all projects</span> <span><FaArrowRight /></span></Link>
      </div>
    </div>
  );
}

export default Projects;
