import React from 'react'
import SkillCard from '../SkillCard';
import { skills } from "../../data/skills";
import { motion } from "framer-motion";
function Skills() {
    console.log(skills);
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className='text-4xl font-bold'>My Skills</h2>
                <p className='text-gray-500 mt-4'>Technologies I work with</p>
            </div>

            {
                skills.map((section) => (
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} key={section.category} className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                        <h2 className='text-2xl font-bold text-blue-600  mb-6'>{section.category}</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                            {
                                section.items.map((skill) =>
                                (
                                    <SkillCard
                                        key={skill.name}
                                        icon={skill.icon}
                                        name={skill.name}
                                        color={skill.color}
                                    />
                                ))
                            }
                        </div>
                    </motion.div>
                ))
            }

        </section>
    )
}

export default Skills
