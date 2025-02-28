import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-overlay'></div> {/* Overlay to dim the background */}
      <h1>RoTech : Crack The Code</h1>
      <p>A 12 Hour Intense Hackathon</p>
      <div className='hero-btns'>
        {/* Buttons can be added here */}
      </div>
    </div>
  );
}

export default HeroSection;
