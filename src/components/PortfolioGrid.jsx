// src/components/PortfolioGrid.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioItem from './PortfolioItem';
import './PortfolioGrid.css';

gsap.registerPlugin(ScrollTrigger);

// ==========================================================
// PENTING: GANTI DENGAN GAMBAR PROYEK PORTOFOLIO ANDA
// Import setiap gambar di sini
// Contoh:
// import logoDesign1 from '../assets/images/portfolio/logo-design-1.jpg';
// import brandingMockup2 from '../assets/images/portfolio/branding-mockup-2.jpg';
// import posterDesign3 from '../assets/images/portfolio/poster-design-3.jpg';
// import uiUxConcept4 from '../assets/images/portfolio/ui-ux-concept-4.jpg';
// ==========================================================

// Menggunakan placeholder image untuk contoh. Ganti dengan import Anda.
import placeholder1 from '../assets/images/portfolio/placeholder-design-1.jpg'; // Pastikan Anda memiliki gambar ini
import placeholder2 from '../assets/images/portfolio/placeholder-design-2.jpg';
import placeholder3 from '../assets/images/portfolio/placeholder-design-3.jpg';
import placeholder4 from '../assets/images/portfolio/placeholder-design-4.jpg';
import placeholder5 from '../assets/images/portfolio/placeholder-design-5.jpg';
import placeholder6 from '../assets/images/portfolio/placeholder-design-6.jpg';


const portfolioData = [
  {
    id: 1,
    title: 'Feed Instagram Promotion',
    category: 'Promotion',
    image: placeholder1, // Ganti dengan `logoDesign1` atau gambar Anda
    description: 'Desain Promosi Jasa Desain Grafis.',
    tags: ['Logo Design', 'Branding', 'Illustrator', 'Minimalist'],
    link: '#', // Ganti dengan link Behance/Dribbble/Case Study proyek ini
  },
  {
    id: 2,
    title: 'Brand Identity Mockup',
    category: 'Branding & Packaging',
    image: placeholder2, // Ganti dengan `brandingMockup2` atau gambar Anda
    description: 'Comprehensive brand identity creation, including stationery, packaging, and marketing materials.',
    tags: ['Brand Guideline', 'Packaging', 'Photoshop', 'Indesign'],
    link: '#',
  },
  {
    id: 3,
    title: 'Desain Jacket Varsity',
    category: 'Print Design',
    image: placeholder3, // Ganti dengan `posterDesign3` atau gambar Anda
    description: 'A series of vibrant posters designed for a music festival, capturing its energetic theme.',
    tags: ['Poster', 'Print', 'Typography', 'Illustrator'],
    link: '#',
  },
  {
    id: 4,
    title: 'Poster Internet Solution',
    category: 'Poster',
    image: placeholder4, // Ganti dengan `uiUxConcept4` atau gambar Anda
    description: 'Redesigned user interface and experience for a fitness tracking mobile application.',
    tags: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
    link: '#',
  },
  {
    id: 5,
    title: 'Social Media Campaign Graphics',
    category: 'Digital Design',
    image: placeholder5, // Ganti dengan gambar proyek Anda
    description: 'Engaging graphics created for a social media marketing campaign across various platforms.',
    tags: ['Social Media', 'Marketing', 'Photoshop', 'Canva'],
    link: '#',
  },
  {
    id: 6,
    title: 'Magazine Layout & Editorial',
    category: 'Editorial Design',
    image: placeholder6, // Ganti dengan gambar proyek Anda
    description: 'Designed the complete layout and editorial graphics for a lifestyle magazine issue.',
    tags: ['Magazine', 'Layout', 'Editorial', 'InDesign'],
    link: '#',
  },
  // Tambahkan proyek graphic design lainnya di sini.
  // Pastikan properti `image` mengarah ke variabel yang sudah Anda import di atas.
];

const PortfolioGrid = () => {
  const gridRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(gridRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
        }
      }
    );

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1 * index,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
          }
        }
      );
    });

  }, []);

  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container text-center">
        <h2>My Graphic Design Portfolio</h2> {/* Mengubah judul section */}
        <div className="portfolio-grid" ref={gridRef}>
          {portfolioData.map((project, index) => (
            <div ref={el => itemsRef.current[index] = el} key={project.id}>
              <PortfolioItem project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;