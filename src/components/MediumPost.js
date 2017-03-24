import React from 'react';
import moment from 'moment';

import MediumSvg from './MediumSvg';

const MediumPost = ({ post }) => {
  return (
    <li className="IgImg" key={post.created_at}>
      <div className="IgImg-header">
        <a>
          <MediumSvg width="36px" height="30px"/>
          <p>{post.user}</p>
        </a>
        <span>{moment(parseInt(post.created_at, 10)).format("lll")}</span>
      </div>
      <img src={post.image} alt={post.title} />
      <p>{post.title}</p>
      <p>{post.preview}</p>
    </li>
  );
}

export default MediumPost
