import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal'

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
            <li>total balance</li>
            <li>you owe</li>
            <li>you are owed</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CenterNav;
