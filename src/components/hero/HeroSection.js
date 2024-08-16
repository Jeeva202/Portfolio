import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar
    if (section) {
      const topOffset = section.offsetTop - navbarHeight - 3 * 16; // Subtract the navbar height and 3rem margin
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-section">
      <h2>Hello👋,</h2>
      <h1 style={{color:"darkmagenta", marginTop:"-25px"}}>I'm Jeevaganesh</h1>
      <h1 style={{marginTop:"-50px"}}>Fullstack Developer</h1>
      <div style={{display:"flex", gap:"2vh"}}>

      </div>
      <button className='button1' onClick={() => scrollToSection('contact')}>Let's Talk</button>
      <button className='button2' onClick={() => scrollToSection('resume')}>Download CV</button>
    </div>
  );
};

export default HeroSection;
