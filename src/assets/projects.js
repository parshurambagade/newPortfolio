import portfolioImg from "../assets/img/portfolioImg.png";
import friendBookImg from "../assets/img/friendBookImg.png";
import speedyEatsImg from "../assets/img/speedy-eats.png";
const Projects = {
    "data": [
      {
        "id": 1,
        "title": "Speedy-Eats",
        "subtitle": "Food Delivery Web App",
        "img": speedyEatsImg,
        "type": "Frontend",
        "desc": [
          "Created a responsive ReactJS app, mimicking Swiggy's functionality.",
          "Implemented Tailwind CSS for a modern UI.",
          "Used Redux Toolkit for 'Add to Cart' feature.",
          "Integrated Shimmer UI and search feature."
        ],
        "codeUrl": "https://github.com/parshurambagade/speedy-eats",
        "techstack": [
          "ReactJS", "Tailwind CSS", "Redux Toolkit", "HTML", "JavaScript", "CSS"
        ]
      },
      {
        "id": 2,
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
        "id": 3,
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
  