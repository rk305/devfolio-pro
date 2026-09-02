import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Hero from '../Components/Sections/Hero'
import AboutSection from '../Components/Sections/AboutSection'
import Skills from '../Components/Sections/Skills'
import ProjectSection from '../Components/Sections/ProjectSection'
import ContactSection from '../Components/Sections/ContactSection'
import Footer from '../Components/Sections/Footer'
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
