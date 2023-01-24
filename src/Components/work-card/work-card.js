import "./work-card.css";
import Fade from 'react-reveal/Fade';
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
            <Fade bottom cascade>
            <div className="project-card">
                <img className="img" src={ props.imgsrc } alt="project"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="project-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} 
                        className="btn">View</NavLink>
                        <NavLink to="url.com" 
                        className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            </Fade>
    
  )
};

export default WorkCard;