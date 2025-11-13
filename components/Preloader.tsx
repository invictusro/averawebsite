"use client";

import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 300);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader">
      <div className="loader"></div>
    </div>
  );
}
