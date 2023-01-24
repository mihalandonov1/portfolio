import './Footer.css';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import React from 'react'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <p>
                    <FaHome
                     size={20}
                     style={{color: "white",
                     marginRight: "2rem" }}
                    />36D Simeonovsko Shose, Sofia, Bulgaria</p>
                </div>

                <div className='phone'>
                    <p>
                    <FaPhone
                     size={20}
                     style={{ color: "white", 
                     marginRight: "2rem" }}
                     />+359879060793
                     </p>
                </div>

                <div className='email'>
                    <p>
                    <FaMailBulk
                     size={20}
                     style={{ color: "white", 
                     marginRight: "2rem" }}
                     />mihal.andonov@gmail.com
                     </p>
                </div>
            
            </div>
            <div className='right'>
                <h4>About this page</h4>
                <p>This is my first real Portfolio project to test my skills.</p>
                <div className='social'>
              
                    <a className='facebook-icon' href='https://facebook.com/mihal.andonov.5' target='_blank' rel='noreferrer'>
                        <FaFacebook/>
                    </a>
                    
                <a className='twitter-icon' href='https://twitter.com/MihalAndonov' target='_blank' rel='noreferrer'>
                    <FaTwitter/>
                </a>
                <a className='linkedin-icon' href='https://linkedin.com/in/mihal-andonov-a25698233' target='_blank' rel='noreferrer'>
                    <FaLinkedin/>
                </a>

                <a className='github-icon' href='https://github.com/mihalandonov1' target='_blank' rel='noreferrer'>
                    <FaGithub/>
                </a>    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer