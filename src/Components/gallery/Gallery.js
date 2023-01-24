import React from "react";
import './Gallery.css';

import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';





const Gallery = () => {
  return (
    <div className="gallery-container">
        <div className="gallery-wrapper">
            <div>
                <h1 className="gallery-title">Gallery</h1>
            </div>
            <div className="gallery">
                <div className="gallery-card">
                    <img src={one} alt="one"/>
                </div>
                <div className="gallery-card h-2">
                    <img src={two} alt="two"/>
                </div>
                <div className="gallery-card card-wide">
                    <img src={three} alt="three"/>
                </div>
                <div className="gallery-card h-2">
                    <img src={four} alt="four"/>
                </div>
                <div className="gallery-card h-2">
                    <img src={five} alt="five"/>
                </div>
                <div className="gallery-card card-wide">
                    <img src={six} alt="six"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Gallery