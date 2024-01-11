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
    <div className="xs:p-4 xs:border xs:border-slate-500 xs:bg-slate-900 xs:flex-col-reverse sm:p-8 flex w-full rounded-xl  p-8 transition duration-400  hover:bg-[#162034ce]  gap-8 my-4">
      <div className="xs:w-full w-[25%] ">
        <img src={img}  alt="project" className="rounded-t-lg" />
        <div className="xs:my-1 sm:my-2 flex justify-between my-2 gap-2   ">
          <a
            className="xs:text-sm xs:py-1 xs:px-4 sm:py-2 sm:text-base text-center py-2 px-8 text-lg text-blue-400 border border-blue-400 rounded-bl-lg w-2/4"
            href={codeUrl}  
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="xs:text-sm xs:py-1 xs:px-4 sm:py-2 sm:text-base py-2 px-8 w-2/4 border text-lg border-blue-400 bg-blue-400 text-sky-950 rounded-br-lg  text-center"
            href={liveUrl}
          >
            Live
          </a>
        </div>
      </div>
      <div className="xs:w-full xs:my-2 w-[75%] h-full">
        <h4 className="xs:text-xl xs:flex xs:flex-col xs:text-center sm:text-2xl text-2xl text-white font-bold">
          {title} <span className="xs:text-base sm:text-lg text-gray-400">({subtitle})</span>
        </h4> 
        <div className="p-4 py-2 ">
          <ul className="list-disc xs:text-base xs:text-justify sm:text-lg text-[1.4rem] leading-16">
            {desc && desc.map((point, i) => (
              <li key={i} className="xs:my-2">{point}</li>
            ))}
          </ul>
        </div>
        <div className="xs:flex-wrap xs:gap-2 md:gap-4 md:justify-evenly flex justify-normal">
          {techstack && techstack.map((tech, i) => (
            <div
              key={i}
              className="xs:text-xs xs:bg-sky-950 xs:text-slate-100 sm:text-sm border border-gray-500 bg-transparent px-2 py-1 rounded-lg"
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



