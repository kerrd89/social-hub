import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router';
import Logo from '../components/Logo';

const Header = ({ user, signOut, googleAuthProvider, addAlias }) => {
  if (user) {
    return (
      <header className="Header">
        <Link to={'/'}><Logo /></Link>
        <div>
          <Link to={'/dkerrious'}><button>My Page</button></Link>
          <button onClick={()=>signOut()}>Log Out</button>
        </div>
      </header>
    );
  } else {
    return (
      <header className="Header">
        <Link to={'/'}><Logo /></Link>
        <div>
          <button onClick={()=> googleAuthProvider()}>Login with Google</button>
        </div>
      </header>
    )
  }
}

export default Header;
