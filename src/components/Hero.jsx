import React from 'react';
import '../styles/Hero.css';

export default function Hero(){
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Full-Stack Developer</p>
          <h1 className="headline">I build fast, delightful, accessible web apps.</h1>
          <p className="summary">
            React • Node • TypeScript • REST/GraphQL • SQL/NoSQL. I turn complex ideas
            into elegant products with clean UX and strong performance.
          </p>
          <div className="cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>

        <div className="hero-art">
          <div className="blob" aria-hidden="true" />
          <div className="card hero-card">
            <div className="avatar">JD</div>
            <div>
              <h3>John Doe</h3>
              <p>React • Node • TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
