import React from 'react';
// import { Link } from 'react-router-dom';

const FriendIndexItem = ({ friend, deleteFriend }) => {
  return (
    <li className='friend-index-item-container'>
      <div>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638645241/profile-icon-png-898_3_ofszd1.png" alt="" />
        <div style={{display:'inline-block'}}>{friend.friendEmail.substring(0, friend.friendEmail.lastIndexOf("@"))}</div>
      </div>
      <button className='delete-friend-button' onClick={() => deleteFriend(friend.id)}>X</button>
    </li> 
  )
}

export default FriendIndexItem;