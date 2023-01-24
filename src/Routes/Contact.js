import React from 'react';
import Navbar from '../Components/navbar/navbar.js';
import Footer from '../Components/footer/Footer.js';
import HeroProjects from '../Components/hero-projects/HeroProjects.js';
import ContactUs from '../Components/ContactForm/ContactUs.js';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroProjects heading="Contact Me" text="If you like my work feel free to contact me" />
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Contact;