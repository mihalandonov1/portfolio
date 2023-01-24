import { Link } from 'react-router-dom';
import './HeroImg.css';
import hero from './images/hero-image.jpg';
import React from 'react';
import Typed from 'react-typed';

function HeroImg() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='hero-img' src={ hero } alt='heroimg'/>
        </div>
        <div className='content'>
            <Typed className='typed-text'
            strings={["HI I'M MIHAL ANDONOV", "WELCOME TO MY PORTFOLIO WEBSITE","I HOPE YOU ENJOY IT ..."]}
            typeSpeed={120}
            backSpeed={20}
            />
            <h1>ReactJS Developer.</h1>
            
            <div>
                <Link to="/Projects" className='btn'>Projects</Link>
                <Link to="/Contact" className='btn'>Contact</Link>
            </div>
        </div>

    </div>
  )
}

export default HeroImg