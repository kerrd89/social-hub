import React from 'react';
import '../styles/Tweet.css';
import moment from 'moment';

import TwitterSvg from './TwitterSvg';

const Tweet = ({ tweet }) => {
  return (
    <li className="Tweet" key={tweet.id}>
      <div className="Tweet-header">
        <a>
        <TwitterSvg width="25px" height="20px" />
        <p>@{tweet.user.screen_name}</p>
        </a>
        <span>{moment(Date.parse(tweet.created_at)).format("lll")}</span>
      </div>
      <p>{tweet.text}</p>
    </li>
  );
}

export default Tweet;
