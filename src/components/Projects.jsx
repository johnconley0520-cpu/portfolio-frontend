import React from 'react';
import '../styles/Projects.css';

const data = [
  {
    title: 'SaaS Dashboard',
    desc: 'Analytics dashboard with charts, auth, and billing.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'E-commerce Store',
    desc: 'Full-stack store with cart, payments and CMS.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Realtime Chat',
    desc: 'WebSockets chat with rooms and presence.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Projects(){
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of recent work.</p>

        <div className="grid">
          {data.map((p, i)=>(
            <article key={i} className="card project">
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="p-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="p-actions">
                  <a className="btn btn-primary" href="#!">Live</a>
                  <a className="btn" href="#!">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
