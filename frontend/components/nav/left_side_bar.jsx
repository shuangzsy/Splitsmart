import React from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
          {/* <li><span>Groups</span></li>
          <li><span>Friends</span></li> */}
          <li>
            <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638551864/Screen_Shot_2021-12-03_at_9.16.54_AM_vlenuy.png" alt="" />
          </li>
        </ul>
      </div>
    )
  }
}

export default LeftNav;
