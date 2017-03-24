import React, { Component } from 'react';
import { shuffle } from 'lodash';
import '../styles/Profile.css';

import Tweet from '../components/Tweet';
import IgImg from '../components/IgImg';
import IgVideo from '../components/IgVideo';
import MediumPost from '../components/MediumPost';

import TwitterSvg from '../components/TwitterSvg';
import IgSvg from '../components/IgSvg';
import MediumSvg from '../components/MediumSvg';

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null
    };
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
  renderMedium(blogs) {
    return blogs.map(blog => {
      return <MediumPost post={blog} key={blog.created_at} />
    })
  }
  render() {
    let { tweets, instagrams, blogs } = this.props;

    let tweetsHTML = this.renderTweets(tweets)
    let instagramsHTML = this.renderIntragrams(instagrams);
    let blogPostsHTML = this.renderMedium(blogs);

    let content = shuffle(tweetsHTML.concat(instagramsHTML, blogPostsHTML))

    return (
      <div>
        <div className="Owner-info">
          <div className="Owner-links">
            <img src={tweets[0].user.profile_image_url_https}  alt="user profile"
              className="UserPhoto"
            />
            <h1>{tweets[0].user.name}</h1>
          </div>
          <div className="Owner-links">
            {tweets && <TwitterSvg width="36px" height="30px"/>}
            {instagrams && <IgSvg width="30px" height="30px"/>}
            {blogs && <MediumSvg width="36px" height="30px"/>}
          </div>
        </div>
        <ul className="Profile">
          {content && content}
        </ul>
      </div>
    )
  }
}

export default Profile;
