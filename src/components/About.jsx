import me from "../assets/img/parshu.jpg";

const About = () => {
  return (  
    <section id="about" className='xs:py-12 xs:px-0 md:pt-20 md:pb-0 lg:w-full lg:pt-24 pr-20'>
      <div className='xs:text-center headings font-bold text-center my-8 '>
        <h5 className='heading2 xs:text-lg md:text-xl lg:text-xl lg:font-normal'>Know more</h5>
        <h2 className='heading1 xs:text-3xl md:text-4xl lg:text-3xl text-blue-400'>About me</h2>
      </div>
      <div className='about-container'>
        <div className='about-image hidden'>
          <img src={me} alt="Parshuram Bagade" />
        </div>

        <div className='about-text xs:text-base xs:text-justify xs:tracking-normal sm:text-lg md:text-xl lg:text-xl lg:tracking-wider' >
          <p>Hello, I'm <span className="text-white">Parshuram Bagade</span>, a driven self-taught <span className="text-white">Fronend Developer</span> hailing from Sangli, Maharashtra. My journey into web development began with a specialization in <span className="text-white">ReactJS</span>, and I've since broadened my skill set to encompass an array of technologies.</p>
          <br />
          <p>I recently graduated with a <span className="text-white">BCA</span> degree in 2023 and am currently pursuing my <span className="text-white">MCA</span> through online mode at <span>Uttaranchal University, Dehradun</span>. This academic pursuit has provided me with a solid foundation in computer science, which I apply to my development work.</p>
          <br />
          <p className="xs:hidden lg:block">In addition to my frontend expertise, which includes proficiency in <span className="text-white">HTML, CSS, JavaScript, React.js and Redux-Toolkit</span>, I've delved into <span className="text-white">SASS</span> and <span className="text-white">Tailwind CSS</span> for enhanced styling and <span className="text-white">MySQL</span> for robust data management. On the backend front, I've gained valuable experience with <span className="text-white">Node.js, Express.js, MongoDB</span>, and <span className="text-white">REST API development</span>.</p>
          {/* <br /> */}
          {/* <p>My passion lies in crafting interactive and responsive web applications that offer seamless user experiences. I'm enthusiastic about applying my skills and knowledge to real-world projects, collaborating with talented individuals, and making a meaningful impact in the world of web development.</p> */}
          <br className=" xs:hidden lg:block" />
          <p>I am actively seeking <span className="text-white">internship or job</span> opportunities in the frontend or full-stack development domain. If you believe we could collaborate effectively or if you have any inquiries, please don't hesitate to contact me through the provided details.</p>
          <br />
          <p>Thank you for visiting my portfolio, and I look forward to connecting with you.</p>

        </div>
      </div>

    </section>
  )
}

export default About
