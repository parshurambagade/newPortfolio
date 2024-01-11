import { IoMdArrowRoundBack } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../assets/projects";

const AllProjects = () => {
  return (
    <div className="xs:min-h-[100vh] xs:w-[100vw] xs:py-12 xs:px-6 md:px-12 md:pt-20 bg-gradient-to-r from-[#021934] from-10% via-black via-40% to-[#021934] to-90% h-[100vh] p-32  text-slate-400">
      <Link
        to="/"
        className="xs:text-sm xs:gap-1 md:text-lg text-blue-400 font-bold text-sm  hover:text-blue-200 flex items-center gap-1 "
      >
        <span>
          <IoMdArrowRoundBack />
        </span>{" "}
        <span>Home</span>
      </Link>
      <h1 className="xs:text-lg md:text-2xl md:mb-8 text-3xl my-4 text-white font-bold">
        All Projects
      </h1>

      <div className="xs:text-sm md:text-base flex flex-col w-full">
        <div className="flex text-left border-b text-teal-100 border-slate-700 py-6 w-full">
          <div className="xs:w-[30%] md:w-[25%]  w-[10%]">Name</div>
          <div className="xs:w-[20%] xs:px-2 w-[10%]">Type</div>
          <div className="xs:hidden w-[30%]">Built with</div>
          <div className="xs:hidden w-[25%]">GitHub</div>
          <div className="xs:hidden  w-[25%]">Live</div>
          <div className="xs:flex xs:w-[50%] px-8 hidden ">Links</div>
        </div>
        <div className="w-full">
          {projects.data.map((project) => (
            <div key={project.id} className="flex border-slate-700 py-8  border-b w-full">
              <div className="xs:w-[30%] md:w-[25%] w-[10%]  text-teal-100">{project.title}</div>
              <div className="xs:w-[20%] xs:px-2 w-[10%]">{project.type}</div>
              <div className="xs:hidden flex flex-wrap gap-2 w-[30%]">
                {project.techstack.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-blue-500 bg-sky-950 text-sky-200 px-2 py-1 text-xs rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="xs:hidden xs:text-wrap w-[25%] text-wrap">
                <a href={project.codeUrl}>{project.codeUrl}</a>
              </div>
              <div className="xs:hidden w-[25%] text-wrap">
                <a href={project.liveUrl ? project.liveUrl : "/"}>
                  {project.liveUrl ? project.liveUrl : "-"}
                </a>
              </div>
              <div className="xs:flex gap-8 px-8 xs:w-[50%] xs:gap-12 hidden" >
              <a href={project.codeUrl} className="flex justify-center items-center"><span>GitHub</span><span><FiArrowUpRight /></span> </a>
              <a href={project.liveUrl ? project.liveUrl : "/"} className="flex justify-center items-center"><span>Live</span><span><FiArrowUpRight /></span>  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
