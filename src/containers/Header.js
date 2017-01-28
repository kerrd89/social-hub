import React from 'react';
import '../styles/Header.css';

const Header = ({ user, signOut, googleAuthProvider, uid }) => {
  if (user) {
    return (
      <header className="Header">
        <button onClick={()=>signOut()}>Sign Out</button>
      </header>
    );
  } else {
    return (
      <header className="Header">
        <button onClick={()=>googleAuthProvider()}>Login with Google</button>
      </header>
    )
  }
}

export default Header;
