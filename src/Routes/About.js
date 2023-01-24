import React from 'react';
import Navbar from '../Components/navbar/navbar.js';
import Footer from '../Components/footer/Footer.js';
import HeroProjects from '../Components/hero-projects/HeroProjects.js';
import AboutContent from '../Components/AboutContent/AboutContent.js';
import Skills from '../Components/skills/Skills.js';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroProjects heading="Personal Info  " text="Get to know more about me ..."/>
      <Skills/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About