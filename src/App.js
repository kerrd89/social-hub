import React, { Component } from 'react';
import firebase, { signIn, signOut } from './firebase.js';

import './styles/reset.css';
import './App.css';

import tweets from '../mockData/tweets.js';
import instagrams from '../mockData/instagrams.js';
import blogPosts from '../mockData/blogPosts.js';

import Header from './containers/Header';
import Profile from './containers/Profile';
import Landing from './containers/Landing';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
      uid: null
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
    if (this.props.params.uid) {
      this.setState({ uid: this.props.params.uid });
    }
  }
  render() {
    let { user, uid } = this.state;
    return (
        <div className="App">
          <Header user={user} signOut={signOut} googleAuthProvider={signIn} uid={uid}/>
          {uid && <Profile uid={uid} tweets={tweets} instagrams={instagrams} blogs={blogPosts} />}
          {!uid && <Landing />}
        </div>
    );
  }
}

export default App;
