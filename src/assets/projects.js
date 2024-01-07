import portfolioImg from "../assets/img/portfolioImg.png";
import friendBookImg from "../assets/img/friendBookImg.png";
const Projects = {
    "data": [
      {
        "id": 1,
        "title": "FriendBook",
        "subtitle": "Social Media Website",
        "img": friendBookImg,
        "type": "Fullstack",
        "desc": [
          "Used React Query to fetch user data and posts f      rom API",
          "Used JSON Web Token (JWT) and Cookies for authentication",
          "Used React Context API for implementing dark mode functionality"
        ],
        "codeUrl": "https://github.com/parshurambagade/social",
        "techstack": [
          "ReactJS", "Node.js", "MySQL", "Scss", "JavaScript", "CSS", "HTML"
        ]
      },
      {
        "id": 2,
        "title": "Portfolio",
        "subtitle": "Personal Portfolio Website",
        "img": portfolioImg ,
        "type": "Frontend",
        "desc": [
          "A personal portfolio website built using ReactJS",
          "Showcases frontend skills",
          "Deployed on firebase hosting",
          "Used Tailwind CSS for styling"
        ],
        "liveUrl": "https://mrparshu.live/",
        "codeUrl": "https://github.com/parshurambagade/newPortfolio",
        "techstack": ["ReactJS", "Tailwind CSS", "Firebase", "JavaScript", "CSS", "HTML"]
      }
    ]
  };
  
  export default Projects;
  // Now you can use the jsonData variable as a JavaScript object
  console.log(Projects);
  