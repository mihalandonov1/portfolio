import React from 'react';
import Navbar from '../Components/navbar/navbar.js';
import Footer from '../Components/footer/Footer.js';
import HeroProjects from '../Components/hero-projects/HeroProjects.js';
import Work from '../Components/work/Work.js';


function Projects() {
  return (
    <div>
      <Navbar />
      <HeroProjects heading="Projects." text="Some of my works" />
      <Work />
      <Footer />
    </div>
  );
}

export default Projects;