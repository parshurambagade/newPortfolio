import React from 'react'
import "./skills.scss"

const Skills = () => {
  return (
    <div id='skills'>
      <div className='headings'>
        <h5 className='heading2'>What are</h5>
        <h2 className='heading1'>My Skills</h2>
      </div>

      <div className='my-skills'>
        <div className='frontend'>
          <h4 className='heading3'>Frontend Skills</h4>
          <div className="skills">
            <div className="skill">ReactJS</div>
            <div className="skill">jQuery</div>
            <div className="skill">JavaScript</div>
            <div className="skill">BootStrap</div>
            <div className="skill">Scss</div>
            <div className="skill">CSS</div>
            <div className="skill">HTML</div>
          </div>
        </div>

        <div className='backend'>
          <h4 className='heading3'>Backend Skills</h4>
          <div className="skills">
            <div className="skill">Node.js</div>
            <div className="skill">Express.js</div>
            <div className="skill">MongoDB</div>
            <div className="skill">MySQL</div>
          </div>
        </div>

        <div className='languages'>
          <h4 className='heading3'>Programming Languages</h4>
          <div className="skills">
            <div className="skill">Java</div>
            <div className="skill">JavaScript</div>
            <div className="skill">Python</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills