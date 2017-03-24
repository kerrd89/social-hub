import React from 'react';
import '../styles/SignUp.css';

const SignUp = ({ user, cancel, googleAuthProvider }) => {
  return (
    <section className='Modal'>
      <div className="signUp">
        <div className="column">
          <div id="user-authentication">{user ? "You are already logged in" :
            <button onClick={()=> googleAuthProvider()}>Login with Google</button>}
          </div>
        </div>
        <div className="column">
          M
        </div>
        <div className="column">column3</div>
      </div>
      <button className="cancel-button" onClick={()=>cancel()}>Cancel</button>
    </section>
  );
}

export default SignUp;
