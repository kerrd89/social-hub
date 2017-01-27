import React from 'react';
import '../styles/IgVideo.css';
import moment from 'moment';

import IgSvg from './IgSvg';

const IgVideo = ({ instagram }) => {
  return (
    <li className="IgVideo" key={instagram.videos.id}>
      <div className="IgVideo-header">
        <a>
          <IgSvg width="24px" height="24px"/>
          <p>@{instagram.videos.user.username}</p>
        </a>
        <span>{moment(parseInt(instagram.videos.created_time)).format("lll")}</span>
      </div>
      <div className="IgVideo-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rR9pDQoAtjE" frameborder="0" allowFullScreen></iframe>
      </div>
      <p>{instagram.videos.caption}</p>
    </li>
  );
}

export default IgVideo;
