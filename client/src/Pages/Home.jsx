import React from 'react'
import Navbar from '../Components/layout/Navbar'
import Hero from '../Components/sections/Hero'
import AboutSection from '../Components/sections/AboutSection'
import Skills from '../Components/sections/Skills'
import ProjectSection from '../Components/sections/ProjectSection'
import ContactSection from '../Components/sections/ContactSection'
import Footer from '../Components/sections/Footer'
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <Skills />
            <ProjectSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home
