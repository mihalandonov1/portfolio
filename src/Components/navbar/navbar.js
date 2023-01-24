import { Link } from 'react-router-dom';
import './navbar.css';
import React, { useState } from "react";

import { FaTimes } from 'react-icons/fa';
import {FaBars} from "react-icons/fa";

function Navbar() {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'} onClick={ scrollToTop }>
        <Link to="/">
            <h1 className='logo'>Portfolio</h1>
        </Link>
        <ul className={click ? 'nav-bar active' : 'nav-bar'}>
            <li onClick={ scrollToTop }>
                <Link to='/'>Home</Link>
            </li>
            <li onClick={ scrollToTop }>
                <Link to='/about'>About</Link>
            </li>
            <li onClick={ scrollToTop }>
                <Link to='/projects'>Projects</Link>
            </li>
            <li onClick={ scrollToTop }>
                <Link to='/blog'>Blog</Link>
            </li>
            <li onClick={ scrollToTop }>
                <Link to='/contact'>Contact Me</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color: 'white'}} />
            ) : (
                <FaBars size={30} style={{color: 'white'}} />
            )}
        </div>
    </div>
  );
};

export default Navbar