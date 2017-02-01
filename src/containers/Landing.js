import React from 'react';
import '../styles/Landing.css';
import LandingSvgs from '../components/LandingSvgs.js';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Landing-background">
        <h2>All of your social media, one page.</h2>
        <p>With new social media platforms popping up daily, make it easy for people to follow you across all platforms.</p>
        <button>Sign Up, Its Free!</button>
        <LandingSvgs />
      </div>
    </div>
  );
}

export default Landing;
