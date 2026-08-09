import portfolio from "../assets/images/portfolio.jpg";
import leetcode from "../assets/images/leetcode.jpg";
import agri from "../assets/images/agri.jpg";
import sentiment from "../assets/images/sentiment.jpg";
import kavya from "../assets/images/kavya.png";
export const projects = [
    {
        id: 1,
        image: portfolio,
        title: "Portfolio Website",
        description: "Personal portfolio website built using React, Tailwind CSS and Framer Motion.",
        tech: ["React", "Tailwind", "Framer Motion"],
        github: "https://github.com/rk305/devfolio-pro",
        live: "#",
    },
    {
        id: 2,
        image: leetcode,
        title: "LeetCode Metrics",
        description: "Dashboard to visualize LeetCode statistics using API integration.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "#",
        live: "#",
    },
    {
        id: 3,
        image: agri,
        title: "Agriculture Project",
        description: "Modern agriculture management system with responsive UI.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "#",
        live: "#",
    },
    {
        id: 4,
        image: sentiment,
        title: "Movie Sentiment Analysis",
        description: "Deep learning based sentiment analysis using TensorFlow and LSTM.",
        tech: ["Python", "TensorFlow", "LSTM"],
        github: "#",
        live: "#",
    },
    {
        id: 5,
        image: kavya,
        title: "Kavya Sangrah",
        description: "Deep learning based sentiment analysis using TensorFlow and LSTM.",
        tech: ["Python", "TensorFlow", "LSTM"],
        github: "https://github.com/rk305/Kavya_sangrah",
        live: "https://kavyasangrah.vercel.app/",
    },
];