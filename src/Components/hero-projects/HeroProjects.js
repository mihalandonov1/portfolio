import "./HeroProjects.css";

import React, { Component } from 'react'

class HeroProjects extends Component {
  render() {
    return (
    <div className="hero-projects-img">
      <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>

    </div>
    );
}
}
export default HeroProjects
