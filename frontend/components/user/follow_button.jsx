import React from 'react';

const FollowButton = (props) => {

  let button;
  if (props.user.id === props.currentUser.id) {
    button = (
      <button
        className='follow-button'
        onClick={props.logout}
      >Logout</button>
    );
  } else if (props.user.followed) {
    button = (
      <button
        className='unfollow-button'
        onClick={()=>props.deleteFollow(props.user.id)}
      >Following</button>
    );
  } else {
    button = (
      <button className='follow'
      onClick={()=>props.createFollow(props.user.id)}
      >Follow</button>
    );
  }

  return button;
};

export default FollowButton;
