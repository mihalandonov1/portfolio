import "./AboutContent.css";
import me from "./images/self.jpg";
import React from 'react';
import CV from './CV.pdf';


const AboutContent = () => {
  return (
    <div className="about">
        <div className="about-container">
            
                <div className="about-card">
                    
                    <div className="info">
                        <h1>Mihal Andonov</h1>
                        <div className="pic">
                        <img src={me} alt="img"/>
                        </div>
                        <p>Birth: 07.06.1989</p>
                        <p>Location: Sofia, Bulgaria</p>
                        <p>Email: mihal.andonov@gmail.com</p>
                        <p>Phone: +359 879060793</p>
                    </div>
                    <div className="btn-cv">
                        <a className="btn" href={CV} download="MihalAndonovResume.pdf">Download my CV</a>
                    </div>
                </div>
            
            
                <div className="about-text-knowledge">
                    <h1>Knowledge:</h1>
                    <p>I have a solid understanding of HTML, CSS, and JavaScript, as well as experience with popular front-end frameworks such as React. I am also familiar with responsive design principles and have experience creating mobile-friendly websites.</p>
                </div>
                <div className="about-text-me">
                    <h1>About Me:</h1>
                    <p>As a junior front-end developer, I am a highly motivated and passionate individual with a strong desire to learn and grow in the field of web development. I am a quick learner and am always eager to take on new challenges and improve my skills. I am excited to work on a team and collaborate with designers and developers to create beautiful and functional websites that deliver an exceptional user experience.</p>
                </div>
            
        </div>
        
    </div>
  )
}

export default AboutContent;