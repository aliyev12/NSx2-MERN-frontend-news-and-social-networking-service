import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const UserAside = ({profileImageUrl, username}) => (
  <aside className="col">
    <div className="card mr-3 mb-3" style={{width: "200px"}}>
        <img
          src={profileImageUrl || DefaultProfileImg}
          alt={username}
          className="card-img-top"
          height="200"
        />
    </div>
  </aside>
);

export default UserAside;