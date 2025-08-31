import React from 'react';
import '../styles/Navbar.css';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="dot" /> MyPortfolio
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </div>
    </header>
  );
}
