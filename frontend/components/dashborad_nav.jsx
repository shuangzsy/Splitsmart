import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = (props) => {
  return (
    <div className="dashboard-header">
      {/* <nav className="header-nav group"> */}

        <div className="header-logo">
          <Link to='/dashboard'>Splitsmart</Link>
        </div>
        <div>
          <ul className="header-list group">
            <li>
              <a href="#">{props.currentUser.username}</a>
              <ul className="header-notifications">
                {/* <li><a href="#">Your account</a></li>
                <li><a href="#">Create a group</a></li>
                <li><a href="#">Fairness calculators</a></li>
                <li><a href="#">Contact support</a></li> */}
              </ul>
            </li>
          </ul>
        </div>
        <div><button className='log-out-button' onClick={() => props.UserLogout()}>Log Out</button></div>

      {/* </nav> */}
    </div>

  )
}

export default DashboardNav;