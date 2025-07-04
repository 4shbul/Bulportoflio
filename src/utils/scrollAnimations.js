// src/utils/scrollAnimations.js
import { gsap } from 'gsap'; // Pastikan ini benar
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Anda bisa menambahkan fungsi animasi umum di sini jika diperlukan
// Contoh:
export const initScrollAnimations = () => {
  // Misalnya, animasi fade-in umum untuk section
  gsap.utils.toArray('section').forEach((section,) => {
    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );
  });
};

// Anda perlu memanggil initScrollAnimations() di App.jsx atau di setiap komponen
// Jika sudah dihandle di setiap komponen seperti Hero, About, Skills, dll.,
// maka file ini mungkin tidak perlu digunakan secara langsung, atau hanya untuk utility functions.
// Untuk saat ini, kita sudah mengimplementasikan ScrollTrigger di masing-masing komponen.