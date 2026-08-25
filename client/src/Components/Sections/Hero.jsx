import React from 'react'
import profile1 from "../../assets/images/Profile_image1.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section id='hero' className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='max-w-7xl mx-auto px-0 sm:px-6 py-12 sm:py-16 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12'>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='flex-1 text-center lg:text-left'
                >
                    <p className='text-base sm:text-lg text-blue-600 font-medium'>
                        Hello, I'm
                    </p>

                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mt-3'>
                        Rohit Kumar
                    </h1>

                    <h2 className='text-xl sm:text-2xl font-semibold text-gray-700 mt-4'>
                        Full Stack Developer
                    </h2>

                    <p className='text-gray-500 leading-7 sm:leading-8 mt-6 max-w-xl mx-auto lg:mx-0'>
                        I build modern, responsive and scalable web applications using
                        React, Node.js, Express and MongoDB.
                    </p>

                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8'>
                        <Link to='/contact' className='bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-900 duration-200 cursor-pointer' >
                            Hire Me
                        </Link>

                        <a href='/Resume.pdf' download className='border border-blue-600 bg-orange-400 text-white rounded-lg px-6 py-3 hover:bg-red-900 hover:text-blue-500 duration-200 cursor-pointer' >
                            Download Resume
                        </a>
                    </div>

                    <div className='flex items-center justify-center lg:justify-start gap-5 mt-8'>
                        <a href="mailto:rkumar96347@gmail.com">
                            <FaEnvelope size={22} className="hover:text-red-500 duration-300" />
                        </a>

                        <a
                            href="https://linkedin.com/in/rohit-kumar96347"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-600 duration-300"
                        >
                            <FaLinkedin size={22} />
                        </a>

                        <a
                            href="https://github.com/rk305"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-700 duration-300"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://instagram.com/rkumar96347"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-pink-600 duration-300"
                        >
                            <FaInstagram size={22} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='flex-1'
                >
                    <div className='flex justify-center items-center'>
                        <div className='w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border border-blue-500'>
                            <img
                                src={profile1}
                                alt='Profile Image'
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}