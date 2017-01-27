import React, { Component } from 'react';
import { shuffle } from 'lodash';
import '../styles/Profile.css';

import Tweet from '../components/Tweet';
import IgImg from '../components/IgImg';
import IgVideo from '../components/IgVideo';
import MediumPost from '../components/MediumPost';

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
    let { tweets, uid, instagrams, blogs } = this.props;

    let tweetsHTML = this.renderTweets(tweets)
    let instagramsHTML = this.renderIntragrams(instagrams);
    let blogPostsHTML = this.renderMedium(blogs);

    let content = shuffle(tweetsHTML.concat(instagramsHTML, blogPostsHTML))

    return (
      <div>
        <ul className="Profile">
          {content && content}
        </ul>
      </div>
    )
  }
}

export default Profile;
