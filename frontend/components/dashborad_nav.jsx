import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = (props) => {
  return (
    <header className="header">
      <nav className="header-nav group">

        <h1 className="header-logo">
          <a href="#">Splitsmart</a>
        </h1>

        <ul className="header-list group">
          <li>
            <a href="#">{props.CurrentUser}</a>
            <ul className="header-notifications">
              <li><a href="#">Your account</a></li>
              <li><a href="#">Create a group</a></li>
              <li><a href="#">Fairness calculators</a></li>
              <li><a href="#">Contact support</a></li>
              <li> <button onClick={() => props.UserLogout()}>Log Out</button></li>
            </ul>
          </li>
        </ul>

      </nav>
    </header>

  )
}

export default DashboardNav;