// src/components/About.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

import profilePic from '../assets/images/profile.jpg'; // <-- Pastikan path ini benar untuk gambar profil Anda

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutSectionRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRef = useRef(null);
  const expCardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(aboutSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -50, scale: 0.9 },
      {
        opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out", delay: 0.2,
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(textContentRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.15, delay: 0.4,
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(expCardRef.current,
      { opacity: 0, y: 20, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.1)", delay: 0.6,
        scrollTrigger: {
          trigger: expCardRef.current,
          start: "top 90%",
        }
      }
    );

  }, []);

  return (
    <section id="about" className="about-section section-padding" ref={aboutSectionRef}>
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <div className="about-content">
          <div className="about-image" ref={imageRef}>
            <img src={profilePic} alt="Profile" />
            {/* <div className="image-placeholder"></div> */}
          </div>
          <div className="about-text-content" ref={textContentRef}>
            <h3>
              I'm a <span className="accent-text">Creative Graphic Designer</span>. {/* Ganti di sini */}
            </h3>
            <p className="text-medium">
              I am a professional with a degree in computer science, boasting over 3 years of experience in the design field, specializing in graphic design and UI/UX. My passion lies in transforming concepts into visually compelling and effective designs that resonate with the audience.
            </p> {/* Sesuaikan deskripsi */}
            <p className="text-medium">
              My expertise covers a wide range of design areas, from branding and marketing materials to digital illustrations and user interfaces. I am dedicated to creating impactful visual solutions that not only look great but also achieve client objectives and communicate clear messages.
            </p> {/* Sesuaikan deskripsi */}
            <div className="experience-card card-base" ref={expCardRef}>
              <div className="experience-item">
                <span className="experience-number">5+</span>
                <span className="experience-label">Years Experience</span>
              </div>
              <div className="experience-item">
                <span className="experience-number">170+</span>
                <span className="experience-label">Projects Completed</span>
              </div>
            </div>
            <a href="#contact" className="btn mt-4">Let's Connect</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;