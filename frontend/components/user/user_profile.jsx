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
        <DashboardNav currentUser={this.props.currentUser} UserLogout = {this.props.UserLogout}/>
        <Link to="/all">All Expenses</Link>
        {this.props.AddExpense}
      </div>
    )
  }
}

export default UserProfile;
