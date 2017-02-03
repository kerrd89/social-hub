import React from 'react';
import '../styles/Header.css';
import Logo from '../components/Logo';

const Header = ({ user, signOut, googleAuthProvider, uid }) => {
  if (user) {
    return (
      <header className="Header">
        <Logo />
        <button onClick={()=>signOut()}>Sign Out</button>
      </header>
    );
  } else {
    return (
      <header className="Header">
        <Logo />
        <button onClick={()=>googleAuthProvider()}>Login with Google</button>
      </header>
    )
  }
}

export default Header;
