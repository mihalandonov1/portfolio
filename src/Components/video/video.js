import './video.css';
import video from './Happiness.mp4'

import React from 'react'

const Video = () => {
  return (
    <div className='container'>
        <div className='video-wrapper'>
            <h1>Happines</h1>
            
              <video width='80%' height='80%' controls muted startfrom="5" autoPlay={"autoplay"} loop>
                <source src={video} type='video/mp4'/>
              </video>
            
        </div>

    </div>
  )
}

export default Video;