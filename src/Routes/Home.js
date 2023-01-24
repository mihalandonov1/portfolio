import React from 'react';
import Navbar from '../Components/navbar/navbar.js';
import HeroImg from '../Components/hero/HeroImg.js';
import Footer from '../Components/footer/Footer.js';
import Work from "../Components/work/Work.js";
import Video from '../Components/video/video.js';
import Gallery from '../Components/gallery/Gallery.js';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Video/>
      <Work/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Home;