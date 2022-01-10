import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import { Link } from 'react-router-dom';
import DashboardNav from '../dashborad_nav';
import LeftNav from '../nav/left_side_bar';
import CenterNav from '../nav/center_bar';
import Modal from '../modal';

class ExpenseIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.requestExpenses();
  }

//  componentDidUpdate(prevProps){
//    console.log("update")
//    if (prevProps.currentUser.id !== this.props.currentUser.id){
//      this.props.requestExpenses();
//    }
//   } 


  render() {
    const { expenses, deleteExpense, editExpense, splits, users } = this.props;
    return (
      <div>
        <Modal />
        <div><DashboardNav currentUser={this.props.currentUser} UserLogout={this.props.UserLogout} /></div>
        <div className="profile-body">
          <div className='left_side_bar'><LeftNav expenses={this.props.expenses} splits={this.props.splits} currentUser={this.props.currentUser} /></div>
          {/* <div className='center_bar'><CenterNav AddExpense={this.props.AddExpense} /></div> */}
          <div className="all-expenses">
            <div className="top_bar">
              <h1>All expenses</h1>
              {this.props.addExpense}
            </div>
            <ul>
              {
                expenses.map(expense => <ExpenseIndexItem key={expense.id} expense={expense} deleteExpense={deleteExpense} editExpense={editExpense} splits={splits} users={users}/>)
              }
            </ul>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638552017/Screen_Shot_2021-12-03_at_9.19.58_AM_dleon5.png" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default ExpenseIndex;
