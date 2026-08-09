import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/project";
import ProjectCard from "../ProjectCard";

function ProjectSection() {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24" >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold"> Featured Projects </h2>
                <p className="text-gray-500 mt-4"> Some of my recent work </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}  >
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                            live={project.live}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;