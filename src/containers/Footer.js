import React from 'react';
import '../styles/Footer.css';
import Logo from '../components/Logo';

const Footer = () => {
  return (
      <div className="Footer">
        <div className="Footer-column">Column A</div>
        <div className="Footer-column">Column B</div>
        <div className="Footer-column">
          <p>Column C</p>
          <ul><li>Contact</li></ul>
        </div>
      </div>
  );
}
export default Footer;
