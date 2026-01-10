'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#DE0402] shadow-lg z-50 
          transition-all duration-300 hover:bg-primary/80 group focus:outline-none
          animate-fade-slide-up"
          aria-label="Scroll to top"
        >
          <Image src='/scrollup.webp' alt="Scroll to top" className="w-5 h-5 group-hover:scale-110 transition-all duration-300" width="20" height="20" />
        </button>
      )}
    </>
  );
};

export default ScrollUp;
