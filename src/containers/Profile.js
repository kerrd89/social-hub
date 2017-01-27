import React, { Component } from 'react';
import axios from 'axios';

import '../styles/Profile.css';

import Tweet from '../components/Tweet';
import IgImg from '../components/IgImg';
import IgVideo from '../components/IgVideo';

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null
    };
  }
  retrieveContent(uid, endpoint) {
    //endpoint does not exist yet
    axios.get(`/${uid}/${endpoint}`)
      .then(r => console.log(r))
      .catch(error => console.log(error));
  }
  renderTweets(tweets) {
    return tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id}/>);
  }
  renderIntragrams(instagrams) {
    return instagrams.map(post => {
      if(post.videos) {
        return <IgVideo instagram={post} key={post.videos.created_time} />
      }
      if(post.type === "image") {
        return <IgImg instagram={post} key={post.caption.id}/>
      }
    });
  }
  render() {
    let { tweets, uid, instagrams } = this.props;
    let tweetsHTML = this.renderTweets(tweets)
    let instagramsHTML = this.renderIntragrams(instagrams);
    return (
      <div>
        <p>{uid}</p>
        <ul className="Profile">
          {tweetsHTML && tweetsHTML}
          {instagramsHTML}
        </ul>
      </div>
    )
  }
}

export default Profile;
