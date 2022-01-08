import React from 'react';
import { Link } from 'react-router-dom';
import FriendIndexContainer from '../friends/friend_index_container';
import CreateFriendContainer from '../friends/create_friend_container';
import GroupIndexContainer from '../groups/group_index_container';
import CreateGroupContainer from '../groups/create_group_container';

class LeftNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { splits, currentUser, expenses} = this.props;
    let splitFriend = splits.filter(split => split.email !== currentUser.email);
    let uniqueFriend = [];
    let uniqueGroup = []
    splitFriend.map(split => 
    {if (!uniqueFriend.includes(split.username)){
        uniqueFriend.push(split.username)
    }
    })

    expenses.map(expense => {
      if (!uniqueGroup.includes(expense.groupName)) {
        uniqueGroup.push(expense.groupName)
      }
    })

    return (
      <div className='left-side-bar-list-container'>
        <ul className="left_side_bar_list">
          <li className="dashboard"><Link to="/dashboard">✉️ Dashboard</Link></li>
          <li className="activity">
            <Link className="activity-list" to="/activity">🏳️ Recent activity</Link>
          </li>
          {/* <li className="filter">
            <input type="text" placeholder="filter by name"/>
          </li> */}
          <li className="all">
            <Link className='all-expense-list' to="/all"> 🗒 All expenses</Link>
          </li>
          <li className='group-list'>
            <span className='group-label'>GROUPS     </span>
            <span><Link className='group-new-link' to='/groups/new'>+add</Link></span>
            <div><GroupIndexContainer/></div>
            {/* <ul>
              {
                uniqueGroup.map(group => {
                  // if (length > 0)
                  return (
                    <li key={group}>
                      <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638648395/computer-icons-price-tag-tag-258a86a3764715cfe2ab536ca808aec6_1_gxw3g2.png" alt="" />
                      {group}
                    </li>
                  )
                })
              }
            </ul> */}
          </li>

          <li className='friend-list'>
            <span className='friend-label'>FRIENDS     </span>
            <span><Link className='group-new-link' to='/groups/new'>+add</Link></span>
              {/* <ul>
                {
                  uniqueFriend.map(friend => {
                    return (
                      <li key={friend}>
                        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638645241/profile-icon-png-898_3_ofszd1.png" alt="" />
                        {friend}
                      </li>
                    )
                  })
                }
              </ul> */}
            <div><FriendIndexContainer/></div>
          </li>
          <li className='invite-friend-container-li'>
            <div><CreateFriendContainer/></div>
          </li>

          <li className='meta-date'>
            <a href="https://www.linkedin.com/in/shuang-zheng-54a3109b/"><img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1641341961/Screen_Shot_2022-01-04_at_4.17.11_PM_nagrpl.png" /></a>
            <a href="https://github.com/shuangzsy"><img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1641341973/Screen_Shot_2022-01-04_at_4.17.04_PM_qwa3qn.png" /></a>
          </li>
        </ul>
      </div>
    )
  }
}

export default LeftNav;
