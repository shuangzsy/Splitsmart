import React from 'react';
import { Link } from 'react-router-dom';

const SplitIndexItem = ({ split, currentUser, currentUsername }) => {
    if (split.email !== currentUser && split.oweAmount > 0) return (
        <div>
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638517195/Screen_Shot_2021-12-02_at_11.39.35_PM_bwjsnw.png" alt="" />
          {` ${split.username} owes You $${(split.oweAmount).toFixed(2)}`}
        </div>
    )
    else if (split.email !== currentUser && split.oweAmount < 0) return (
        <div>
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638517195/Screen_Shot_2021-12-02_at_11.39.28_PM_rh8ezb.png" alt="" />
          {`${currentUsername} You owes ${split.username} $${(-split.oweAmount).toFixed(2)}`}
        </div>
    )
    else return "" ;  
}

export default SplitIndexItem;