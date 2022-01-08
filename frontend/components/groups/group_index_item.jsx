import React from 'react';
// import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group, deleteGroup }) => {
  return (
    <li className='group-index-item-container'>
      <div>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638648395/computer-icons-price-tag-tag-258a86a3764715cfe2ab536ca808aec6_1_gxw3g2.png" alt="" />
        <div style={{ display: 'inline-block' }}> {group.groupName}</div>
      </div>
      <button className='delete-group-button' onClick={() => deleteGroup(group.id)}>X</button>
    </li>
  )
}

export default GroupIndexItem;