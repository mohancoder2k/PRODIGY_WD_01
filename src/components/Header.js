import React, { useEffect, useState } from 'react';
import '../App.css';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar">
        <ul>
          <li className={`navbar__item ${scrolled ? '-white' : '-blue'}`} onClick={() => scrollToSection('home')}>
            Home
          </li>
          <li className={`navbar__item ${scrolled ? '-white' : '-orange'}`} onClick={() => scrollToSection('about')}>
            About
          </li>
          <li className={`navbar__item ${scrolled ? '-white' : '-navy-blue'}`} onClick={() => scrollToSection('services')}>
            Services
          </li>
          <li className={`navbar__item ${scrolled ? '-white' : '-yellow'}`} onClick={() => scrollToSection('contact')}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
