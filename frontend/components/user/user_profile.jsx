import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import DashboardNav from '../dashborad_nav';
import ExpenseIndexContainer from '../expense/expense_index_container';
import Modal from '../modal'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.requestCurrentUser();
  // }

  render() {
 
    return (
      <div>
        <Modal/>
        <div><DashboardNav currentUser={this.props.currentUser} UserLogout={this.props.UserLogout} /></div>
        <div><Link to="/all">All Expenses</Link></div>
        <div>{this.props.AddExpense}</div>
      </div>
    )
  }
}

export default UserProfile;
