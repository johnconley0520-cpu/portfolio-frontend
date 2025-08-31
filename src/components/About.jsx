import React from 'react';
import '../styles/About.css';

export default function About(){
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          I’m a full-stack developer focused on building performant interfaces and robust backends.
          I value usability, accessibility, thoughtful animations, and clean code.
        </p>

        <div className="about-grid">
          <div className="card about-card">
            <h3>Skills</h3>
            <ul className="chips">
              <li>React</li><li>TypeScript</li><li>Node</li><li>Express</li>
              <li>PostgreSQL</li><li>MongoDB</li><li>REST</li><li>GraphQL</li>
              <li>Jest</li><li>Playwright</li>
            </ul>
          </div>

          <div className="card about-card">
            <h3>Experience</h3>
            <p>
              4+ years shipping web apps for startups and enterprise clients.
              I enjoy working across the stack and collaborating closely with design and product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
