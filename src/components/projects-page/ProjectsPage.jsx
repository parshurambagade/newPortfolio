import React from 'react'
import './projects.scss'
import friendBookImg from "../../../img/friendBookImg.png";
import portfolioImg from "../../../img/portfolioImg.png";
import snakeGameImg from "../../../img/snakeGameImg.png";
import keepNoteImg from "../../../img/keepNoteImg.png";

const ProjectsPage = () => {
  return (
    <div id='projects'>
        <div className='headings'>
        <h5 className='heading2'>My recent work</h5>
        <h2 className='heading1'>Projects</h2>
        </div>

        <div className="projects-container">
            {/* 1st project */}
            <div className="project">
                <div className="project-image">
                    <img src={friendBookImg} alt="project" />
                    <div className="project-links">
                        <a className="project-link github" href="https://github.com/parshurambagade/social" target='_blank'>GitHub</a>
                        <a className="project-link live" disabled>Live</a>
                        
                    </div>
                </div>
                <div className="project-info">
                    <h4>FriendBook - <span>Social Media Website</span></h4>
                    <div className='project-desc'>
                        <ul>
                            <li>Used React Query to fetch user data and posts from API</li>
                            <li>Used JSON Web Token (JWT) and Cookies for authentication</li>
                            <li>Used React Context API for implementing dark mode functionality</li>
                        </ul>
                    </div>
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

            {/* 2nd project */}
            <div className="project">
                <div className="project-image">
                    <img src={portfolioImg} alt="project" />
                    <div className="project-links">
                    <a className="project-link github" href="https://github.com/parshurambagade/newPortfolio" target='_blank'>GitHub</a>
                        <a className="project-link live" href='https://mrparshu.live/' target='_blank'>Live</a>
                    </div>
                </div>
                <div className="project-info">
                    <h4>Portfolio - Personal Portfolio Website</h4>
                    <div className='project-desc'>
                        <ul>
                            <li>A personal portfolio website built using ReactJS</li>
                            <li>Showcases frontend skills</li>
                            <li>Deployed on firebase hosting</li>
                            <li>Used Scss for styling</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                        <div className="stack">ReactJS</div>
                        <div className="stack">Scss</div>
                        <div className="stack">Firebase</div>
                        <div className="stack">JavaScript</div>
                        <div className="stack">CSS</div>
                        <div className="stack">HTML</div>
                    </div>
                </div>
            </div>

            {/* 3rd project */}
            <div className="project">
                <div className="project-image">
                    <img src={keepNoteImg} alt="project" />
                    <div className="project-links">
                    <a className="project-link github" href="https://github.com/parshurambagade/keep-note" target='_blank'>GitHub</a>
                        <a className="project-link live" href='https://stupendous-hotteok-a22b13.netlify.app/' target='_blank'>Live</a>
                    </div>
                </div>
                <div className="project-info">
                    <h4>Keep Note</h4>
                    <div className='project-desc'>
                        <ul>
                            <li>Built a simple note taking app using ReactJS
                            </li>
                            <li>User can add and delete note.</li>
                            <li>Deployed on Netlify</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                        <div className="stack">ReactJS</div>
                        <div className="stack">JavaScript</div>
                        <div className="stack">CSS</div>
                        <div className="stack">HTML</div>
                    </div>
                </div>
            </div>

            {/* 4th project */}
            <div className="project">
                <div className="project-image">
                    <img src={snakeGameImg} alt="project" />
                    <div className="project-links">
                    <a className="project-link github" href="https://github.com/parshurambagade/snake-game" target='_blank'>GitHub</a>
                        <a className="project-link live" href='https://frolicking-horse-ccf45b.netlify.app/' target='_blank'>Live</a>
                    </div>
                </div>
                <div className="project-info">
                    <h4>Snake Game</h4>
                    <div className='project-desc'>
                        <ul>
                            <li>Built a simple Snake Game using Vanilla JavaScript
                            </li>
                            <li>Added sound effects and animations for better user experience</li>
                            <li>Deployed on Github hosting</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                        <div className="stack">JavaScript</div>
                        <div className="stack">CSS</div>
                        <div className="stack">HTML</div>
                        <div className="stack">GitHub</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectsPage