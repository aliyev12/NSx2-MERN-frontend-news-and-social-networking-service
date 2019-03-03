import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({date, profileImageUrl, text, username}) => (
  <div style={{minWidth: '300px'}}>
    <li className="list-group-item mb-2">
      <div className="media">
        <img
          src={profileImageUrl || DefaultProfileImg}
          alt={username}
          height="100"
          width="100"
          className="mr-3"
        />
        <div className="media-body">
          <Link to="/">@{username} &nbsp;</Link>
          <span className="text-muted">
            <Moment className="text-muted" format="Do MMM YYYY">{date}</Moment>
          </span>
          <p>
            {text}
          </p>
        </div>
      </div>
    </li>
  </div>
);

export default MessageItem;
