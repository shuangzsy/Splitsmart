import React from 'react';
// import { Link } from 'react-router-dom';

const FriendIndexItem = ({ friend, deleteFriend }) => {
  return (
    <li>
      <div>Friends</div>
      <div>{friend.friend_email}</div>
      <button onClick={() => deleteFriend(friend.id)}></button>
    </li> 
  )
}

export default FriendIndexItem;