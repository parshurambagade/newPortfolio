const ProjectInfo = ({
  img,
  title,
  subtitle,
  desc,
  techstack,
  liveUrl,
  codeUrl,
}) => {
  return (
    // MAIN CONTAINER
    <div className="xs:p-4 xs:border xs:border-slate-500 xs:bg-slate-900 xs:flex-col sm:p-6 md:p-6 flex w-full rounded-xl  p-8 transition duration-400  hover:bg-[#162034ce]  my-4">
     
      {/* PROJECT NAME  */}
      <div className="mb-4 md:mb-4 md:px-2 lg:mb-2 xl:mb-4">
        <h4 className="xs:text-lg xs:flex xs:flex-col xs:text-center sm:text-xl md:text-left md:text-base md:flex-row md:gap-2 xl:text-xl text-2xl uppercase text-white font-bold">
          {title}{" "}
          <span className="capitalize xs:text-sm sm:text-base md:text-base text-gray-400">
            ({subtitle})
          </span>
        </h4>
      </div>

      {/* PROJECT IMG AND DESCRIPTION  */}
      <div className="md:flex md:w-full md:h-full md:justify-between md:items-center md:gap-4 xl:items-start">
        <div className="xs:w-full md:w-[30%] ">
          <img src={img} alt="project" className="rounded-t-lg" />
          <div className="xs:my-1 sm:my-2 flex justify-between my-2 gap-2   ">
            <a
              className="xs:text-xs xs:py-1 xs:px-4 sm:py-2 sm:text-sm md:text-xs  text-center py-2 px-8 text-lg text-blue-400 border border-blue-400 rounded-bl-lg w-2/4 hover:bg-blue-300 hover:text-slate-800"
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="xs:text-xs xs:py-1 xs:px-4 sm:py-2 sm:text-sm md:text-xs py-2 px-8 w-2/4 border text-lg border-blue-400 bg-blue-400 text-sky-950 rounded-br-lg  text-center hover:bg-sky-300"
              href={liveUrl}
            >
              Live
            </a>
          </div>
        </div>
        <div className="xs:w-full xs:my-2 md:w-[70%] md:my-0 h-full">
          <div className="p-4 py-2 md:py-0 xl:px-6 xl:py-2  ">
            <ul className="list-disc xs:text-sm xs:text-justify sm:text-base md:text-base md:flex md:flex-col md:gap-3 lg:text-sm lg:gap-2 xl:text-base xl:gap-4 xl:tracking-widest leading-16">
              {desc &&
                desc.map((point, i) => (
                  <li key={i} className="xs:my-2 md:my-0 ">
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* TECH STACKS  */}
      <div className="xs:flex-wrap xs:gap-3 sm:gap-5  md:mt-3 md:justify-start md:gap-8  lg:gap-2 lg:justify-between xl:justify-start xl:gap-8 xl:mt-6 flex ">
          {techstack &&
            techstack.map((tech, i) => (
              <div
                key={i}
                className="xs:text-xs xs:bg-sky-950 xs:text-slate-100 sm:text-xs border md:text-xs border-gray-500 bg-transparent px-2 py-1 rounded-lg"
              >
                {tech}
              </div>
            ))}
        </div>
    </div>
  );
};

export default ProjectInfo;
