import React from 'react';

function UserProfilePic({ currentUser, users }) {
  return <img src={users[currentUser].profilePic} className="userProfilePic" />;
}

function UserProfilePicHidden({ currentUser, users }) {
  return (
    <img
      src={users[currentUser].profilePic}
      className="userProfilePic invisible"
    />
  );
}

export { UserProfilePic, UserProfilePicHidden };
