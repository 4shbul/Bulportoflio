// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const socialIconsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.3 }
    );

    gsap.fromTo(textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(buttonGroupRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)", stagger: 0.1, delay: 0.7 }
    );

    gsap.fromTo(socialIconsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1, delay: 1 }
    );

  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="container hero-content">
        <h1 ref={titleRef}>
          Hi, I'm <span className="accent-text">bul</span>, <br />a <span className="accent-text">Graphic Designer</span>. {/* Ganti menjadi Graphic Designer */}
        </h1>
        <p className="hero-text text-medium" ref={textRef}>
          Passionate about creating visually stunning and effective designs.
          I transform ideas into impactful visual communications. {/* Sesuaikan deskripsi */}
        </p>
        <div className="hero-buttons" ref={buttonGroupRef}>
          <a href="#portfolio" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>

        <div className="hero-social-icons">
          {/* Ganti # dengan link profil sosial Anda */}
          {/* Pertimbangkan untuk menambahkan ikon Behance atau Dribbble jika relevan untuk desainer grafis */}
          {['fa-linkedin-in', 'fa-behance', 'fa-dribbble', 'fa-instagram'].map((iconClass, index) => ( // Menambahkan Behance, Dribbble, Instagram
            <a href="#" key={iconClass} target="_blank" rel="noopener noreferrer"
               ref={el => socialIconsRef.current[index] = el}>
              <i className={`fab ${iconClass}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;