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
    <div id="skills" className="mr-20 pt-20">
      <div className="font-bold text-center my-8 ">
        <h2 className="text-4xl text-blue-400">My Skills</h2>
      </div>

      <div className="headings font-bold text-2xl my-4 text-slate-500 flex justify-evenly">
        <h4 className={`heading3 cursor-pointer hover:text-slate-400  ${showSkills == "frontend" && "text-blue-200 underline underline-offset-8"}`} id="frontend" onClick={handleShowSkill}>Frontend</h4>
        <h4 className={`heading3 cursor-pointer hover:text-slate-400  ${showSkills == "backend" && "text-blue-200 underline underline-offset-8"}`} id="backend" onClick={handleShowSkill}>Backend</h4>
        <h4 className={`heading3 cursor-pointer hover:text-slate-400  ${showSkills == "tools" && "text-blue-200 underline underline-offset-8"}`} id="tools" onClick={handleShowSkill}>Other Tools</h4>
      </div>  

      <div className="my-16 text-blue-400">
        <div className={showSkills == "frontend" ? "flex flex-wrap w-full justify-evenly gap-12" : "hidden"}>  
            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><FaReact /></span><span className="text-2xl font-bold">ReactJS</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiRedux /></span> <span className="text-2xl font-bold">Redux Toolkit</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiTailwindcss /></span> <span className="text-2xl font-bold">Tailwind CSS</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiBootstrap /></span> <span className="text-2xl font-bold">BootStrap</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><FaSass /></span> <span className="text-2xl font-bold">Scss</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><FaHtml5 /></span> <span className="text-2xl font-bold">HTML</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiCss3 /></span> <span className="text-2xl font-bold">CSS</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiJavascript /></span> <span className="text-2xl font-bold">JavaScript</span></div>

        </div>

        <div className={showSkills == "backend" ? "flex flex-wrap w-full justify-evenly gap-16" : "hidden"}>  
            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><FaNode /></span> <span className="text-2xl font-bold">Node.js</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiExpress /></span> <span className="text-2xl font-bold">Express.js</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiMongodb /></span> <span className="text-2xl font-bold">MongoDB</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiMysql /></span> <span className="text-2xl font-bold">MySQL</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><TbApi /></span> <span className="text-2xl font-bold">Rest API</span></div>
        </div>


        <div className={showSkills == "tools" ? "flex flex-wrap w-full justify-evenly gap-16" : "hidden"}>  
            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiVisualstudiocode /></span> <span className="text-2xl font-bold">VS Code</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><FaGithub /></span> <span className="text-2xl font-bold">Git and GitHub</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiPostman /></span> <span className="text-2xl font-bold">Postman</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><FaChrome /></span> <span className="text-2xl font-bold">Chrome DevTools</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiFirebase /></span> <span className="text-2xl font-bold">Firebase</span></div>
    
            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><FaLinux /></span> <span className="text-2xl font-bold">Linux</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200"><span className="text-6xl"><SiNpm /></span> <span className="text-2xl font-bold">NPM</span></div>

            <div className="flex flex-col border border-blue-400 p-8  rounded-lg justify-center items-center bg-transparent  shadow-lg shadow-blue-300  gap-2 hover:shadow-blue-300  hover:shadow-xl transition duration-200 max-w-[18vw]"><span className="text-6xl"><SiJest /></span> <span className="text-2xl font-bold text-wrap">Jest (JavaScript Testing Framework)</span></div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
