import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
function ProjectCard({ image, title, description, tech, github, live }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            {/* Project Image */}

            <div className="overflow-hidden">
                <img src={image} alt={title} className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            {/* Content */}

            <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800"> {title} </h3>
                {/* Description */}
                <p className="text-gray-500 leading-7 mt-4"> {description} </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">
                    {tech.map((item) => (
                        <span key={item} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium" >
                            {item}
                        </span>
                    ))}
                </div>
                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                    <a href={live} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                        <FaExternalLinkAlt />
                        Live Demo
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;