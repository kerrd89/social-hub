import React from 'react';
import '../styles/Header.css';

const Header = ({ user, signOut, googleAuthProvider }) => {
  if (user) {
    return (
      <header className="Header">
        <img className="UserPhoto" src={user.photoURL} alt="user profile"/>
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
