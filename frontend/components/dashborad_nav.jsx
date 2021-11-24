import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
  return (
    <header class="header">
      <nav class="header-nav group">

        <h1 class="header-logo">
          <a href="#">Splitsmart</a>
        </h1>

        <ul class="header-list group">
          <li>
            <a href="#">props.CurrentUser</a>
            <ul class="header-notifications">
              <li><a href="#">Your account</a></li>
              <li><a href="#">Create a group</a></li>
              <li><a href="#">Fairness calculators</a></li>
              <li><a href="#">Contact support</a></li>
              <li><a href="#">Log out</a></li>
            </ul>
          </li>
        </ul>

      </nav>
    </header>

  )
}

export default DashboardNav;