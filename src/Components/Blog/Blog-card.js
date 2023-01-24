import "./Blog.css";
import Fade from 'react-reveal/Fade';
import React from 'react';


const BlogCard = (props) => {
  return (
            <Fade bottom cascade>
            <div className="blog-card">
                <img className="img" src={ props.imgsrc } alt="project"/>
                <h2 className="blog-title">{props.title}</h2>
                <div className="blog-text">
                    <p>{props.text}</p>
                </div>
            </div>
            </Fade>
    
  )
};

export default BlogCard;