import React from 'react'
import "./about.scss";
import me from "../../../img/parshu.jpg";

const About = () => {
  
    return (
        <section id="about">
          <div className='headings'>
        <h5 className='heading2'>Know more</h5>
        <h2 className='heading1'>About me</h2>
      </div>
      <div className='about-container'>
        <div className='about-image'>
          <img src={me} alt="Parshuram Bagade" />
        </div>

        <div className='about-text' >
          <p>Hello, I'm <span>Parshuram Bagade</span>, a self-taught <span>Full Stack Developer</span> from Sangli, Maharashtra. I specialize in <span>ReactJS development</span> and I'm actively seeking internship or job opportunities in this field.</p>
          <br/>
          <p>With a strong foundation in the <span>MERN stack</span>, I have a passion for building interactive and responsive web applications. I am proficient in HTML, CSS, JavaScript, and have hands-on experience with React, Redux, and Bootstrap.</p>
          <br/>
          <p>I'm excited to apply my skills and knowledge to real-world projects, collaborate with talented individuals, and make a meaningful impact. If you have any <span>internship or job</span> opportunities available for a Frontend or Full Stack developer, I would love to connect. Feel free to reach out via the provided contact details.</p>
        </div>
      </div>

    </section>
    )
}

export default About
