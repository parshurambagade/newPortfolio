import portfolioImg from "../assets/img/portfolioImg.png";
import friendBookImg from "../assets/img/friendBookImg.png";
import speedyEatsImg from "../assets/img/speedy-eats.png";
import travelAdvisorImg from "../assets/img/travelAdvisorImg.png";
import videoX from "../assets/img/videoX.png";
const Projects = {
    "data": [
      {
        "id": 1,
        "title": "VideoX",
        "subtitle": "Dynamic Video Discovery Platform",
        "img": videoX,
        "type": "Frontend",
        "desc": [
          "Integrated YouTube's live API for real-time data updates.",
          "Implemented features such as search, video playback, and auto-suggestion.",
          "Optimized performance with Redux caching and debouncing in the search bar."
        ],
        "liveUrl": "https://euphonious-paletas-bdb716.netlify.app/",
        "codeUrl": "https://github.com/parshurambagade/youtube",
        "techstack": [
          "ReactJS", "Tailwind CSS", "Redux Toolkit", "HTML", "JavaScript", "CSS"
        ]
      },
      {
        "id": 2,
        "title": "Travel Advisor",
        "subtitle": "Location Based Web App",
        "img": travelAdvisorImg,
        "type": "Frontend",
        "desc": [
          "Built a ReactJS app using the Travel-Advisor API for nearby places.",
          "Utilized Axios for data retrieval and React-Google-Maps API for interactive map display.",
          "Styled the app with Sass and deployed it on Firebase for online accessibility.",
        ],
        "liveUrl": "https://travel-advisor-925c7.web.app/",
        "codeUrl": "https://github.com/parshurambagade/travel-advisor",
        "techstack": [
          "React.js", "Sass", "HTML", "JavaScript", "CSS", "Firebase"
        ]
      },
      {
        "id": 3,
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
        "liveUrl": "https://beautiful-moxie-0868a4.netlify.app/",
        "codeUrl": "https://github.com/parshurambagade/speedy-eats",
        "techstack": [
          "ReactJS", "Tailwind CSS", "Redux Toolkit", "HTML", "JavaScript", "CSS"
        ]
      },
      {
        "id": 3,
        "title": "FriendBook",
        "subtitle": "Social Media Website",
        "img": friendBookImg,
        "type": "Fullstack",
        "desc": [
          "Used React Query to fetch user data and posts from API",
          "Used JSON Web Token (JWT) and Cookies for authentication",
          "Used React Context API for implementing dark mode functionality"
        ],
        "codeUrl": "https://github.com/parshurambagade/social",
        "techstack": [
          "ReactJS", "Node.js", "MySQL", "Scss", "JavaScript", "CSS", "HTML"
        ]
      },
      {
        "id": 4,
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
  