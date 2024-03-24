import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/fav_icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar
    if (section) {
      const topOffset = section.offsetTop - navbarHeight - 3 * 16; // Subtract the navbar height and 3rem margin
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div style={{ display: "flex", gap: "2vh", alignItems: "center" }}>
          <img src={logo} height={"40"} />
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Portfolio.</div>
        </div>
        <ul className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li className="navbar-item" onClick={() => scrollToSection('home')}>Home</li>
          <li className="navbar-item" onClick={() => scrollToSection('about')}>About</li>
          <li className="navbar-item" onClick={() => scrollToSection('skill')}>Skills</li>
          <li className="navbar-item" onClick={() => scrollToSection('project')}>Projects</li>
          <li className="navbar-item" onClick={() => scrollToSection('resume')}>Resume</li>
          <li className="navbar-item" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
