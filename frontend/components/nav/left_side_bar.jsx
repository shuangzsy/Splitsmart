import React from 'react';
import { Link } from 'react-router-dom';
import FriendIndexContainer from '../friends/friend_index_container';
import CreateFriendContainer from '../friends/create_friend_container';

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
          <li>
            <span>Groups</span>
            <ul>
              {
                uniqueGroup.map(group => {
                  // if (length > 0)
                  return (
                    <li>
                      <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638648395/computer-icons-price-tag-tag-258a86a3764715cfe2ab536ca808aec6_1_gxw3g2.png" alt="" />
                      {group}
                    </li>
                  )
                })
              }
            </ul>
          </li>

          <li>
            <span>Friends</span>
              <ul>
                {
                  uniqueFriend.map(friend => {
                    return (
                      <li>
                        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638645241/profile-icon-png-898_3_ofszd1.png" alt="" />
                        {friend}
                      </li>
                    )
                  })
                }
              </ul>
            <div><FriendIndexContainer/></div>
          </li>
          <li className='invite-friend-container-li'>
            <div><CreateFriendContainer/></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default LeftNav;
