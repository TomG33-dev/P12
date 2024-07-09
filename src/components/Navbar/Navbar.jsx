import React, { useState, useEffect } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{ position: 'fixed', top: show ? '0' : '-60px', transition: 'top 0.3s' }}>
      <ul>
        <li><a href="#profile" onClick={(e) => scrollToSection(e, '#profile')}>Présentation</a></li>
        <li><a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Expérience</a></li>
        <li><a href="#projets" onClick={(e) => scrollToSection(e, '#projets')}>Projets</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;