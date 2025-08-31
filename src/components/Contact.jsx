import React from 'react';
import '../styles/Contact.css';

export default function Contact(){
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Interested in working together? Send a message.</p>

        <form className="card form" onSubmit={(e)=>e.preventDefault()}>
          <div className="row">
            <label>
              Name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
          </div>

          <label>
            Message
            <textarea rows="5" placeholder="Tell me about your project..." required />
          </label>

          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
