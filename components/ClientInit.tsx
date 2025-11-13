"use client";

import { useEffect } from 'react';

export default function ClientInit() {
  useEffect(() => {
    // Remove AOS and WOW attributes that might hide elements
    const elements = document.querySelectorAll('[data-aos], [data-wow-delay]');
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.visibility = 'visible';
    });

    // Initialize scroll to top button
    const scrollBtn = document.querySelector('.scroll__top');
    if (scrollBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          scrollBtn.classList.add('active');
        } else {
          scrollBtn.classList.remove('active');
        }
      });

      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile menu toggle
    const mobileToggler = document.querySelector('.mobile-nav-toggler');
    const mobileMenu = document.querySelector('.tgmobile__menu');
    const mobileBackdrop = document.querySelector('.tgmobile__menu-backdrop');
    const closeBtn = document.querySelector('.tgmobile__menu .close-btn');

    if (mobileToggler && mobileMenu && mobileBackdrop) {
      mobileToggler.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        mobileBackdrop.classList.add('active');
      });

      closeBtn?.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileBackdrop.classList.remove('active');
      });

      mobileBackdrop.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileBackdrop.classList.remove('active');
      });
    }
  }, []);

  return null;
}
