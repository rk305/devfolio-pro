import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
            { name: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
            { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
            { name: "React", icon: FaReact, color: "text-cyan-500" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
        ],
    },

    {
        category: "Backend",
        items:
            [
                { name: "Node.js", icon: FaNode, color: "text-green-600" },
                { name: "Express", icon: SiExpress, color: "text-gray-700" }
            ]
    },

    {
        category: "DataBase",
        items:
            [
                { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                { name: "MysQL", icon: SiMysql, color: "text-blue-700" },
            ]
    },

    {
        category: "Tools",
        items:
            [
                { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
                { name: "GitHub", icon: FaGithub, color: "text-black" },
                { name: "Postman", icon: SiPostman, color: "text-orange-600" },
            ]
    }

]