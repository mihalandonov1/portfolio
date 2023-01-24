import React from "react";
import './index.css';
import Home from "./Routes/Home.js";
import About from "./Routes/About.js";
import Projects from "./Routes/Projects.js";
import Blog from "./Routes/Blog.js"
import Contact from "./Routes/Contact.js";
import { Route, Routes } from "react-router-dom";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
