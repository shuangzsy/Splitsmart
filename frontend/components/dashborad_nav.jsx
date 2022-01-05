import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = (props) => {
  return (
    <div className="dashboard-header">
      <nav className="header-nav group">

        <h1 className="header-logo">
          <Link to='/dashboard'>Splitsmart</Link>
        </h1>

        <ul className="header-list group">
          <li>
            <a href="#">{props.currentUser.username}</a>
            <ul className="header-notifications">
              {/* <li><a href="#">Your account</a></li>
              <li><a href="#">Create a group</a></li>
              <li><a href="#">Fairness calculators</a></li>
              <li><a href="#">Contact support</a></li> */}
              <li> <button onClick={() => props.UserLogout()}>Log Out</button></li>
            </ul>
          </li>
        </ul>

      </nav>
    </div>

  )
}

export default DashboardNav;