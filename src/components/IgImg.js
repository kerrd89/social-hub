import React from 'react';
import '../styles/IgImg.css';
import moment from 'moment';

import IgSvg from './IgSvg';

const IgImg = ({ instagram }) => {
  return (
    <li className="IgImg" key={instagram.caption.id}>
      <div className="IgImg-header">
        <a>
          <IgSvg width="24px" height="24px"/>
          <p>@{instagram.caption.from.username}</p>
        </a>
        <span>{moment(parseInt(instagram.caption.created_time)).format("lll")}</span>
      </div>
      <img src={instagram.images.standard_resolution.url} alt={instagram.caption.text} />
      <p>{instagram.caption.text}</p>
    </li>
  );
}

export default IgImg;
