import React, { Component } from 'react';
import firebase, { signIn, signOut, reference } from './firebase.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './styles/reset.css';
import './App.css';

import tweets from '../mockData/tweets.js';
import instagrams from '../mockData/instagrams.js';
import blogPosts from '../mockData/blogPosts.js';

import Header from './containers/Header';
import Footer from './containers/Footer';
import Profile from './containers/Profile';
import Landing from './containers/Landing';

import SignUp from './components/SignUp';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
      alias: null,
      signUp: true,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      reference.orderByChild('alias').equalTo('dkerrious').on('child_added', (snapshot) => {
        console.log(snapshot.val().alias, 'hit');
      });
    });
    if (this.props.params.alias) {
      this.setState({ alias: this.props.params.alias });
    }
  }
  componentWillReceiveProps() {
    if (!this.props.params.alias) this.setState({ alias: 'dkerrious' });
    else this.setState({ alias: null });
  }
  addAlias(uid, alias) {
    reference.orderByKey().endAt("dkerrious").on("child_added", (snapshot) => {
      console.log(snapshot.key);
      if (snapshot.key) {
        console.log('alias is taken');
      } else {
        console.log('alias is not taken');
        // let user = {};
        // user[alias] = { uid };
        // reference.push(user);
      }
    });
  }
  render() {
    let { user, alias, signUp } = this.state;
    return (
        <div className="App">
          <Header user={user} signOut={signOut} googleAuthProvider={signIn} alias={alias}
            addAlias={this.addAlias}
          />
          {alias && <Profile alias={alias} tweets={tweets} instagrams={instagrams} blogs={blogPosts} />}
          {!alias && <Landing signUp={()=>this.setState({ signUp: true })}/>}

          <ReactCSSTransitionGroup
            transitionName='AnimateForm'
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
          >
            {signUp && <SignUp user={user} googleAuthProvider={signIn}
                               cancel={()=>this.setState({ signUp: false })}
            />}
          </ReactCSSTransitionGroup>

          <Footer />
        </div>
    );
  }
}

export default App;
