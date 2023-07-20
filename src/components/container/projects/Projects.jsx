import React from 'react'
import './projects.scss'

const Projects = () => {
  return (
    <div id='projects'>
        <div className='headings'>
        <h5 className='heading2'>My recent work</h5>
        <h2 className='heading1'>Projects</h2>
        </div>

        <div className="projects-container">
            <div className="project">
                <div className="project-image">
                    <img src="https://i.ibb.co/0jZ3qYH/1.png" alt="project" />
                    <div className="project-links">
                        <div className="project-link github">GitHub</div>
                        <div className="project-link live">Live</div>
                    </div>
                </div>
                <div className="project-info">
                    <h4 className="heading3">FriendBook</h4>
                    <div className='project-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam iste possimus laborum cupiditate quo? Quae porro a optio inventore similique laudantium rerum vel, error reiciendis illo magnam praesentium odit. Dignissimos?</div>
                    <div className="tech-stack">
                        <div className="stack">ReactJS</div>
                        <div className="stack">Node.js</div>
                        <div className="stack">MySQL</div>
                        <div className="stack">Scss</div>
                        <div className="stack">JavaScript</div>
                        <div className="stack">CSS</div>
                        <div className="stack">HTML</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects