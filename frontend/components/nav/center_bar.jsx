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
      </div>
    )
  }
}

export default CenterNav;
