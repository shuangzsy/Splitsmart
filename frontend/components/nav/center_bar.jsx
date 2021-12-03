import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal';
import SplitIndexContainer from '../expense/split_index_container';

class CenterNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Modal />
        <div className="top_bar">
          <span>Dashboard</span>
          {this.props.AddExpense}
        </div>
        <div >
          <ul className="center-bar-body">
            <li>total balance <strong>$5038</strong></li>
            <li>you owe <strong>$63</strong></li>
            <li>you are owed <strong>$5101</strong></li>
          </ul>
        </div>
        <div className="you-owe-label">
          <p>YOU OWE</p>
          <p>YOU ARE OWED</p>
        </div>
        <div>
          <SplitIndexContainer/>
        </div>
      </div>
    )
  }
}

export default CenterNav;
