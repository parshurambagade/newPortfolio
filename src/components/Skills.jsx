import { useState } from "react";
import { FaReact, FaSass,FaLinux, FaHtml5, FaNode, FaGithub, FaChrome} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiBootstrap,SiVisualstudiocode,SiPostman, SiCss3, SiJavascript, SiExpress, SiMongodb, SiMysql, SiJest, SiFirebase, SiNpm} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import skillsData from "../assets/skillsData";

const Skills = () => {

  const [showSkills, setShowSkills] = useState("frontend");

 const handleShowSkill = (e) => {
    setShowSkills(e.target.id);
  }
  return (
    <div id="skills" className="xs:mx-0 xs:py-8 xs:min-h-[100vh] mr-20 pt-28">
      <div className="font-bold text-center my-8 ">
        <h2 className="xs:text-3xl text-4xl text-blue-400">My Skills</h2>
      </div>

      <div className="xs:border-none xs:bg-transparent xs:px-0 xs:my-2 xs:py-2 my-8 text-blue-400 border border-slate-700 py-16 px-20 rounded-lg  bg-slate-900">

      <div className="headings xs:text-base xs:justify-between xs:my-1 font-bold text-2xl mb-16 text-slate-500 flex justify-evenly">
        <h4 className={`heading3 cursor-pointer hover:text-slate-400  ${showSkills == "frontend" && "text-blue-200 underline underline-offset-8"}`} id="frontend" onClick={handleShowSkill}>Frontend</h4>
        <h4 className={`heading3 cursor-pointer hover:text-slate-400  ${showSkills == "backend" && "text-blue-200 underline underline-offset-8"}`} id="backend" onClick={handleShowSkill}>Backend</h4>
        <h4 className={`heading3 cursor-pointer hover:text-slate-400  ${showSkills == "tools" && "text-blue-200 underline underline-offset-8"}`} id="tools" onClick={handleShowSkill}>Other Tools</h4>
      </div>

        <div className={showSkills == "frontend" ? "xs:my-8 xs:gap-8 flex flex-wrap w-full justify-evenly gap-12" : "hidden"}>  
          {skillsData.frontend && skillsData.frontend.map((skill,i) => {
            return (
              <div key={i} className="xs:w-[40%] xs:p-4 xs:shadow-md xs:shadow-blue-600 flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="xs:text-2xl text-5xl">{skill == "ReactJS" ? <FaReact /> : skill == "Tailwind CSS" ? <SiTailwindcss /> : skill == "Redux Toolkit" ? <SiRedux /> : skill == "Sass" ? <FaSass /> : skill == "BootStrap" ? <SiBootstrap /> : skill == "JavaScript" ? <SiJavascript /> : skill == "HTML" ? <FaHtml5 /> : skill == "CSS" ? <SiCss3 /> : "" }</span><span className="xs:text-sm text-xl font-normal xs:text-center">{skill}</span></div>
            )  
          })}
        </div>

        <div className={showSkills == "backend" ? "xs:my-8 xs:gap-8 flex flex-wrap w-full justify-evenly gap-12" : "hidden"}>  
          {skillsData.backend && skillsData.backend.map((skill,i) => {
            return (
              <div key={i} className="xs:w-[40%] xs:p-4 xs:shadow-md xs:shadow-blue-600 flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="xs:text-3xl text-5xl">{skill == "Node.js" ? <FaNode /> : skill == "Express.js" ? <SiExpress /> : skill == "MongoDB" ? <SiMongodb /> : skill == "MySQL" ? <SiMysql /> : skill == "Rest API" ? <TbApi /> : "" }</span><span className="xs:text-sm text-xl font-normal xs:text-center">{skill}</span></div>
            )  
          })}
        </div>

        <div className={showSkills == "tools" ? "xs:my-8 xs:gap-8 flex flex-wrap w-full justify-evenly gap-12" : "hidden"}>  
          {skillsData.tools && skillsData.tools.map((skill,i) => {
            return (
              <div key={i} className="xs:w-[40%] xs:p-4 xs:shadow-md xs:shadow-blue-600 flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="xs:text-2xl text-5xl">{skill == "VS Code" ? <SiVisualstudiocode /> : skill == "Git and GitHub" ? <FaGithub /> : skill == "Postman" ? <SiPostman /> : skill == "Chrome DevTools" ? <FaChrome /> : skill == "Firebase" ? <SiFirebase /> : skill == "Linux" ? <FaLinux /> : skill == "NPM" ? <SiNpm /> : skill.startsWith("Jest") ? <SiJest /> : ""}</span><span className="xs:text-sm xs:text-center text-xl font-normal">{skill}</span></div>
            )  
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
