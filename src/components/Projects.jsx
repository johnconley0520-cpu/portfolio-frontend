import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    { title: "E-commerce Website", description: "React, Node.js, MongoDB" },
    { title: "Portfolio Website", description: "React, CSS3" },
    { title: "CRM System", description: "Laravel, MySQL" }
  ];

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
