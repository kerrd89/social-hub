import React from 'react';
import '../styles/Header.css';
import Logo from '../components/Logo';

const Header = ({ user, signOut, googleAuthProvider, uid }) => {
  if (user) {
    return (
      <header className="Header">
        <Logo />
        <button onClick={()=>signOut()}>Log Out</button>
      </header>
    );
  } else {
    return (
      <header className="Header">
        <Logo />
        <div>
          <button onClick={()=>googleAuthProvider()}>Login with Google</button>  
        </div>
      </header>
    )
  }
}

export default Header;
