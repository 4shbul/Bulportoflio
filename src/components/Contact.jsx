// src/components/Contact.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Animasi section contact
    gsap.fromTo(contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    // Animasi form
    gsap.fromTo(formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );

    // Animasi info kontak
    gsap.fromTo(infoRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.5,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementasi pengiriman form (misal ke email service atau API)
    alert('Message sent successfully!');
    e.target.reset(); // Reset form setelah submit
  };

  return (
    <section id="contact" className="contact-section section-padding" ref={contactRef}>
      <div className="container text-center">
        <h2>Contact Me</h2>
        <p className="section-subtitle">Let's create something amazing together.</p>

        <div className="contact-content">
          <div className="contact-form card-base" ref={formRef}>
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          <div className="contact-info card-base" ref={infoRef}>
            <h3>My Contact Info</h3>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Location</p>
              <span>Makassar, Indonesia</span>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>Email</p>
              <span>ashabulkhaer01@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <p>Phone</p>
              <span>081524671233</span>
            </div>
            <div className="social-links">
                <h4>Connect on Social</h4>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;