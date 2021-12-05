import React from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <ul className="left_side_bar_list">
          <li className="dashboard"><img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638136934/Screen_Shot_2021-11-28_at_1.24.41_PM_1_kqmi8h.png"/><Link to="/dashboard">Dashboard</Link></li>
          <li className="activity">
            <Link to="/activity">Recent activity</Link>
          </li>
          <li className="filter">
            <input type="text" placeholder="filter by name"/>
          </li>
          <li className="all">
            <Link to="/all">All Expenses</Link>
          </li>
          <li>
            <span>Groups</span>
            <ul>
              {
                uniqueGroup.map(group => {
                  if (group.length > 0)
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
          </li>
        </ul>
      </div>
    )
  }
}

export default LeftNav;
