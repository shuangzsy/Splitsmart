import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import { Link } from 'react-router-dom';
import DashboardNav from '../dashborad_nav';
import LeftNav from '../nav/left_side_bar';
import CenterNav from '../nav/center_bar';
import { openModal } from '../../actions/modal_actions';
import Modal from '../modal'

class ExpenseIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestExpenses();
  }

  render() {
    const { expenses, deleteExpense } = this.props;
    return (
      <div>
        <Modal />
        <div><DashboardNav currentUser={this.props.currentUser} UserLogout={this.props.UserLogout} /></div>
        <div className="profile-body">
          <div className='left_side_bar'><LeftNav /></div>
          {/* <div className='center_bar'><CenterNav AddExpense={this.props.AddExpense} /></div> */}
          <div className="all-expenses">
            <div className="top_bar">
              <span>All Expenses</span>
              <button onClick={() => dispatch(openModal('addexpense'))}>
                Add an expense
              </button>
            </div>
            <ul>
              {
                expenses.map(expense => <ExpenseIndexItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ExpenseIndex;
