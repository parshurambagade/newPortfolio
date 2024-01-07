import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import projects from "../assets/projects"

const AllProjects = () => {
  return (
    <div className="bg-gradient-to-r from-[#021934] from-10% via-black via-40% to-[#021934] to-90% h-[100vh] p-32  text-slate-400">
        <Link to="/" className='text-blue-400 font-bold text-xl hover:text-blue-200 flex items-center gap-2'><span><IoMdArrowRoundBack /></span> <span>Home</span></Link>
        <h1 className="text-4xl my-4 text-white font-bold">All Projects</h1>

        <table className="border-separate border-spacing-8 border-spacing-y-12 table-auto text-lg pl-0  ">
            <thead className="text-left border-b    ">
                <tr className="text-teal-100 border-b text-md font-extralight">
                <th>Name</th>
                <th>Type</th>   
                <th>Built with</th>
                <th>GitHub</th>
                <th>Live</th>
                </tr>    
            </thead>
            <tbody>
                {projects.data.map(project => (
                    <tr key={project.id} className="border-b">
                        <td className="text-teal-100">{project.title}</td>
                        <td>{project.type}</td>
                        <td>{project.techstack.map((tech,i) => (<span key={i} className="border border-blue-500 bg-sky-950 text-sky-200 px-2 py-1 rounded-lg text-sm   mx-2">{tech}</span>))}</td>
                        <td><a href={project.codeUrl}>{project.codeUrl}</a></td>
                        <td><a href={project.liveUrl ? project.liveUrl : "/"}>{project.liveUrl ? project.liveUrl : "-"}</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default AllProjects  