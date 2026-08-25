import React from 'react';
import profile1 from "../../assets/images/Profile_image1.jpeg";
import { motion } from "framer-motion";
function AboutSection() {
    return (
        <section id='about'>
            <div className='max-w-7xl mx-auto px-6 py-24'>
                <div className='text-center mb-16'>
                    <h1 className="text-4xl font-bold">
                        About Me
                    </h1>
                    <p className=" text-gray-500 mt-4">
                        Get to Know me Better
                    </p>
                </div>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    {/* Left-about-section */}

                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='flex justify-center'>
                        <div className='w-72 h-96 lg:w-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500'>
                            <img src={profile1} alt="Profile-photo" className='w-full h-full object-cover' />
                        </div>
                    </motion.div>
                    {/* Right-About-Section */}
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <h3 className="text-3xl font-bold">I'm Rohit Kumar</h3>
                        <h4 className="text-blue-600 text-xl font-semibold mt-2">Full Stack Developer</h4>
                        <p className="text-gray-500 mt-6 leading-8">
                            I am a B.Tech Computer Science student passionate
                            about Full Stack Development. I enjoy building scalable web applications,
                            solving algorithmic problems, and continuously learning modern technologies.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div>
                                <h5 className="font-semibold">Name</h5>
                                <p className="text-gray-500">Rohit Kumar</p>
                            </div>
                            <div>
                                <h5 className="font-semibold">Email</h5>
                                <p className="text-gray-500">rkumar96347@gmail.com</p>
                            </div>
                            <div>
                                <h5 className="font-semibold">Education</h5>
                                <p className="text-gray-500">B.Tech CSE</p>
                            </div>
                            <div>
                                <h5 className="font-semibold">Location</h5>
                                <p className="text-gray-500">India</p>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <a href="/Resume.pdf" download className='inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-900 duration-300 cursor-pointer' >
                                Download CV
                            </a>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10'>
                            <div className='bg-gray-100 rounded-xl p-5 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
                                <h4 className='text-3xl font-bold text-blue-600'>10+</h4>
                                <h3 className="text-gray-600 mt-2">Projects</h3>
                            </div>
                            <div className='bg-gray-100 rounded-xl p-5 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
                                <h4 className='text-3xl font-bold text-blue-600'>1000+</h4>
                                <h3 className="text-gray-600 mt-2">Problems Solved</h3>
                            </div>
                            <div className='bg-gray-100 rounded-xl p-5 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
                                <h4 className='text-3xl font-bold text-blue-600'>Open </h4>
                                <h3 className="text-gray-600 mt-2">to work</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section >
    )
}

export default AboutSection
