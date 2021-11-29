import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import DashboardNav from '../dashborad_nav';
import ExpenseIndexContainer from '../expense/expense_index_container';
import LeftNav from '../nav/left_side_bar';
import CenterNav from '../nav/center_bar';
// import Modal from '../modal'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
 
    return (
      <div>
        {/* <Modal/> */}
        <div><DashboardNav currentUser={this.props.currentUser} UserLogout={this.props.UserLogout} /></div>
        <div className="profile-body">
          <div className='left_side_bar'><LeftNav /></div>
          <div className='center_bar'><CenterNav AddExpense={this.props.AddExpense}/></div>
          {/* <div>{this.props.AddExpense}</div> */}
        </div>
      </div>
    )
  }
}

export default UserProfile;
