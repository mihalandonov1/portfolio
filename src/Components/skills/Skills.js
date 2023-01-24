import { FaBootstrap, FaCss3, FaGit, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import "./Skills.css";

import React from 'react'

const Skills = () => {
  return (
    <div className="skills">
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className="skills-list">
               <FaHtml5 className="icon"/>

               <FaCss3 className="icon"/>

               <FaJs className="icon"/>

               <FaReact className="icon"/>

               <FaBootstrap className="icon"/>

               <FaGit className="icon"/>
            </div>
        </div>
    </div>
  )
}

export default Skills;