const ProjectInfo = ({
  img,
  title,
  subtitle,
  desc,
  techstack,
  liveUrl,
  codeUrl,
}) => {
  // console.log();
  return (
    <div className="flex w-full p-4 rounded-xl  hover:p-8 transition duration-400  hover:bg-[#162034ce]  gap-8 my-4">
      <div className="w-[25%] ">
        <img src={img}  alt="project" className="rounded-t-lg" />
        <div className="flex justify-between my-2 gap-2   ">
          <a
            className="py-2 px-8 text-lg text-blue-400 border border-blue-400 rounded-bl-lg w-2/4"
            href={codeUrl}  
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="py-2 px-8 w-2/4 border text-lg border-blue-400 bg-blue-400 text-sky-950 rounded-br-lg  text-center"
            href={liveUrl}
          >
            Live
          </a>
        </div>
      </div>
      <div className="w-[75%] h-full">
        <h4 className="text-2xl text-white font-bold">
          {title} - <span>{subtitle}</span>
        </h4> 
        <div className="p-4 py-2 ">
          <ul className="list-disc text-[1.4rem] leading-16">
            {desc && desc.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          {techstack && techstack.map((tech, i) => (
            <div
              key={i}
              className="border border-gray-500 bg-transparent px-2 py-1 rounded-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;



