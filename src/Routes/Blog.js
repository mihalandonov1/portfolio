import React from 'react';
import Navbar from '../Components/navbar/navbar.js';
import Footer from '../Components/footer/Footer.js';
import HeroProjects from '../Components/hero-projects/HeroProjects.js';
import Blog from '../Components/Blog/Blog.js';


const BlogPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroProjects heading="BLOG" text="You can read some of my BLOG" />
      <Blog/>
      <Footer/>
    </div>
  )
}

export default BlogPage;