import React from 'react'
import Me from '../../img/parshu.jpg';
// import {FaAward} from "react-icons/fa";
// import {FiUsers} from "react-icons/fi";
// import {VscFolderLibrary} from "react-icons/vsc";
import HomeSocials from "../home/homeSocials/HomeSocials"
import "./about.scss";

const AboutMe = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5>
      <h2>About Me</h2> */}
      {/* <div className="container about_container">
        <div className="about-left-container">
        <div className="about_me">
        <div className="about_me-img">
        <img src={Me} alt="About Image" />
        </div>
        </div>
        <div className="about-btn">
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
        </div>
        
        <div className="about-right-container">
        <div className="about_content">
        <div className="about_cards">
        <article id="first-about-card" className="about_card">
        <FaAward className="about_icons"/>
        <h5>Experience</h5>
        <small>2 Years Working</small>
        </article>
        <article id="second-about-card" className="about_card">
        <FiUsers className="about_icons"/>
        <h5>Clients</h5>
        <small>200+ Worldwide</small>
        </article>
        <article id="third-about-card" className="about_card">
        <VscFolderLibrary className="about_icons"/>
        <h5>Projects</h5>
        <small>80+ Completed</small>
        </article>
      </div> */}

            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p> */}

          {/* </div>
        </div>
      </div> */}


      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='about-container'>
        <div className='about-text'>
          <p>Hello, I'm <span>Parshuram Bagade</span> from Sangli, Maharashtra, currently a final year BCA student at Chintamanrao Institute of Technology.</p>
          <br/>
          <p>I'm a self-taught Full Stack Web Developer specializing in the <span>MERN stack</span>, constantly improving my skills and staying up-to-date with the latest technologies.</p>
          <br/>
          <p>Aside from coding, I'm a music enthusiast who can play the harmonium and currently learning to play the ukulele, which helps me stay creative and focused.</p>
          <br/>
          <p>I'm seeking a job as a full stack or frontend developer to apply my skills and knowledge to real-world projects and collaborate with talented individuals.</p>
          <br />
          <p>Feel free to reach out to me via my contact details if you're interested in working with me. Thank you for taking the time to read my about me page, and I look forward to connecting with you!</p>
        </div>
        <div className='about-img'>
          <img src={Me} alt="about img" />
          <h3>Parshuram Bagade</h3>
          <h5>Fullstack Web Developer</h5>
          <HomeSocials />
          {/* <div className="about-btns">
            <a className="btn" href="#">Projects</a>
            <a className="btn" href="#">Skills</a>
            <a className="btn" href="#">Contact Me</a>
          </div> */}
        </div>
      </div>

    </section>
  )
}

export default AboutMe
