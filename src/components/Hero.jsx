import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>Mervin Gaitho</span></h1>
        <p>Full-Stack Developer | React | Node.js | PHP | Laravel</p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
