import React from 'react';
// import { Link } from 'react-router-dom';

const ActivityIndexItem = ({ activity}) => {
  let eventMap;
  if (activity.event === "Add"){
    eventMap = "added";
  }else if(activity.event === "Update"){
    eventMap = "updated"
  }else if(activity.event === "Delete"){
    eventMap = "deleted"
  }
  return (
    <li className='activity-index-item-container'>
      <div>
        <img className='activity-image' src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638476337/Screen_Shot_2021-12-02_at_12.17.59_PM_mk8tvd.png" alt="" />
        <div style={{ display: 'inline-block' }}> <strong>You</strong> {eventMap} "<strong>{activity.description}</strong>."</div>
        <div className='activity-create-date'>{activity.createdAt.slice(0,10)}</div>
      </div>
    </li>
  )
}

export default ActivityIndexItem;