// src/components/Skills.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css'; // Pastikan CSS diimpor dengan benar

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: 'Graphic Design', percentage: 95 },
  { name: 'Branding', percentage: 90 },
  { name: 'UI/UX Design', percentage: 90 },
  { name: 'Print Design', percentage: 85 },
  { name: 'Illustration', percentage: 75 },
  { name: 'Photo Editing', percentage: 90 },
  { name: 'Typography', percentage: 88 }, // Contoh skill tambahan
  { name: 'Color Theory', percentage: 92 }, // Contoh skill tambahan
];

const Skills = () => {
  const skillsRef = useRef(null);
  const barsRef = useRef([]); // Untuk mereferensikan setiap progress bar

  useEffect(() => {
    // Animasi untuk section Skills secara keseluruhan
    gsap.fromTo(skillsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 90%", // Mulai animasi saat bagian atas section mencapai 80% dari viewport
          toggleActions: "play none none none", // Mainkan hanya sekali saat masuk
        }
      }
    );

    // Animasi untuk setiap progress bar
    barsRef.current.forEach((bar, index) => {
      // Pastikan elemen bar ada sebelum mencoba membuat animasi
      if (bar) {
        const percentage = skillsData[index].percentage;
        gsap.fromTo(bar,
          { width: 0 }, // Mulai dari lebar 0%
          {
            width: `${percentage}%`, // Animasi ke persentase sebenarnya
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5 + index * 0.1, // Delay berurutan untuk efek staggered
            scrollTrigger: {
              trigger: bar,
              start: "top 95%", // Mulai animasi saat bar terlihat di viewport
              toggleActions: "play none none none",
            }
          }
        );
      }
    });
  }, []); // [] agar useEffect hanya berjalan sekali saat komponen di-mount

  return (
    <section id="skills" className="skills-section section-padding" ref={skillsRef}>
      <div className="container text-center">
        <h2>My Skills</h2>
        <p className="section-subtitle"></p>

        <div className="skills-content card-base">
          <div className="skill-icons">
            {/* Contoh ikon skills, Anda bisa menambahkan lebih banyak atau mengubahnya */}
            <div className="icon-item">
              <i className="fas fa-palette"></i>
              <span>Design Tools</span>
            </div>
            <div className="icon-item">
              <i className="fas fa-lightbulb"></i>
              <span>Creativity</span>
            </div>
            <div className="icon-item">
              <i className="fas fa-handshake"></i>
              <span>Collaboration</span>
            </div>
            <div className="icon-item">
              <i className="fas fa-brain"></i>
              <span>Problem Solving</span>
            </div>
          </div>

          <div className="skill-bars-list">
            {skillsData.map((skill, index) => (
              <div className="skill-bar-wrapper" key={skill.name}>
                <span className="skill-name">{skill.name}</span>
                <div className="progress-container">
                  {/* progress-bar width diatur oleh GSAP, dimulai dari 0% */}
                  <div
                    className="progress-bar"
                    style={{ width: `0%` }} // Set initial width to 0%
                    ref={el => barsRef.current[index] = el} // Referensikan elemen untuk animasi GSAP
                  ></div>
                </div>
                <span className="percentage-value">{skill.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;