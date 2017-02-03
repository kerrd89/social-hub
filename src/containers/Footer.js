import React from 'react';
import '../styles/Footer.css';
import Logo from '../components/Logo';

const Footer = ({ user, signOut, googleAuthProvider, uid }) => {
  if (user) {
    return (
      <header className="Footer">
        <Logo />
        <button onClick={()=>signOut()}>Sign Out</button>
      </header>
    );
  } else {
    return (
      <header className="Footer">
        <Logo />
        <button onClick={()=>googleAuthProvider()}>Login with Google</button>
      </header>
    )
  }
}

export default Footer;
