import React from 'react';
import '../styles/Landing.css';
import LandingSvgs from '../components/LandingSvgs.js';
import FeatureOneIcon from '../components/iconA.js';
import FeatureTwoIcon from '../components/iconB.js';
import FeatureThreeIcon from '../components/iconC.js';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Landing-background">
        <h2>All of your social media, one page.</h2>
        <p>With new social media platforms popping up daily, make it easy for people to follow you across all platforms.</p>
        <button>Sign Up, Its Free!</button>
        <LandingSvgs />
      </div>
      <div className="features">
        <div className="feature">
          <div className="icon">
            <FeatureOneIcon />
          </div>
          <h3>All of your stuff in one dashboard</h3>
          <p>Pull together your updates in one place so people can stay updated</p>
        </div>
        <div className="feature">
          <div className="icon">
            <FeatureTwoIcon />
          </div>
          <h3>Just select the accounts you want to link</h3>
          <p>Once accounts are linked, we can periodically sync data and make you your own page</p>
        </div>
        <div className="feature">
          <div className="icon">
            <FeatureThreeIcon />
          </div>
          <h3>Social media trends</h3>
          <p>See stats about how many views your posts received</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
