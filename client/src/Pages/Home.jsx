import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import Skills from '../components/sections/Skills'
import ProjectSection from '../components/sections/ProjectSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/sections/Footer'
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
