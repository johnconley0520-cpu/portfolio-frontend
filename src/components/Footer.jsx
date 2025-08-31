import React from 'react';
import '../styles/Footer.css';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container foot">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="links">
          <a href="#home">Top</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
