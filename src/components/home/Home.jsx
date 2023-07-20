import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import CTA from './cta/CTA'
import HomeSocials from './homeSocials/HomeSocials'
import "./home.scss"
const Home = () => {
  return (
    <section id="home">
    <div className='content-container'>
      <div className="heading-text">
        <h5>Hey👋 I am</h5>
        <h2>Parshuram Bagade</h2>
        <div className='roles'>
          <span id="heading-1" >
            <Typewriter
              words={['Fullstack Developer', 'JavaScript Developer', 'Freelance Web Developer', 'ReactJS Developer', 'MERN Developer']}
              loop={true}
              cursor
              cursorColor="red"
              cursorStyle='<'
              typeSpeed={30}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>


      {/*CTA goes here*/}
      <div className="cta-container">
        <CTA />
      </div>  
    </div>
      
      {/*Navbar section*/}
      {/* <div className="nav-container">
        <Nav />
      </div> */}


      {/*Socials go here*/}
      <div className="socials">
        <HomeSocials/>
      </div>
    
   </section>
  )
}

export default Home