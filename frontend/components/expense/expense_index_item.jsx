import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseShowContainer from './expense_show_container';
import Modal from '../modal';
import EditExpenseFormContainer from './edit_expense_form_container';


class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.clickToShow = this.clickToShow.bind(this);
  }

  toggleModal() {
    this.setState({ toggle: !this.state.toggle })
  }

  clickToShow() {
    if (this.props.expense){
      const expenseItem = document.getElementById(`${this.props.expense.id}`);
      if (expenseItem.style.display === "none" || expenseItem.style.display === ""){
        expenseItem.style.display = "block"
      }else {
        expenseItem.style.display = "none"
      }
    }
  }

  render(){
    if (!this.props.expense) return "loading";
    let monthRef = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    let {expense, splits, deleteExpense, users} = this.props;

    let payerUsername = "you";
    // debugger;
    if (expense && splits && expense.payer !== "you"){
      expense.splitIds.map(splitId => {
        splits.map(split => {
          if (split.id === splitId && split.email === expense.payer){
            payerUsername = split.username
          }
        })
      })
    }

    //conditions for different split-method
    let lendShow;
    if (payerUsername === "you"){
      if (expense.splitMethod === "equally"){
        lendShow = <span><strong style={{ color: '#5bc5a7' }}>${(Math.abs(expense.totalAmount) * 0.5).toFixed(2)}</strong></span>
      }else{
        lendShow = <span><strong style={{ color: '#5bc5a7' }}>${(Math.abs(expense.totalAmount)).toFixed(2)}</strong></span>
      }
    }else{
      if (expense.splitMethod === "equally"){
        lendShow = <span><strong style={{ color: '#ff652f' }}>${(Math.abs(expense.totalAmount) * 0.5).toFixed(2)}</strong></span>
      }else{
        lendShow = <span><strong style={{ color: '#ff652f' }}>${(Math.abs(expense.totalAmount)).toFixed(2)}</strong></span>
      }
    }

    //generate the creator username
    let creatorId = expense.creatorId;
    let creatorUsername;
    if (users){
      users.map(user => {
        if (user.id === creatorId){
          creatorUsername = user.username
        }
      })
    }

  return (
      <>
        <div className='expense-overview-window'>
          <div className="expense-overview" onClick={this.clickToShow}>
            <div className='expense-date'>
              <span className='expense-date-month'>{monthRef[expense.createdAt.slice(5, 7) - 1]}</span>
              <span className='expense-date-number'>{expense.createdAt.slice(8, 10)}</span>
            </div>
            <div><img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638476337/Screen_Shot_2021-12-02_at_12.17.59_PM_mk8tvd.png" alt="" /></div>
            <div className="expenseIndex-desription">{expense.description}</div>
          </div>
          <div className="payer-info">
          <span className='payer-user-info'>{payerUsername} paid </span>
            <span><strong>${Math.abs(expense.totalAmount).toFixed(2)}</strong></span>
          </div>
          <div className="ower-info">
          <span className='ower-uer-info'>{payerUsername} lent </span>
          {/* {payerUsername === "you" ?
              <span><strong style={{ color: '#5bc5a7' }}>${(Math.abs(expense.totalAmount)*0.5).toFixed(2)}</strong></span> :
              <span><strong style={{ color: '#ff652f' }}>${(Math.abs(expense.totalAmount) * 0.5).toFixed(2)}</strong></span>
            } */}
            {lendShow}
          </div>
          <div className='expense-delete-button-container'>
            <button className='expense-delete-button' onClick={() => deleteExpense(expense.id)}>X</button>
          </div>
        </div>

        <div id={expense.id} className="all-expense-item-details">
          <div className="expense-info">
            <div>
            <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1640543861/catg_qxrt5q.png" alt="" />
            </div>
            <div>
              <div className="expense-description">{expense.description}</div>
              <div className="total-amount">${Math.abs(expense.totalAmount).toFixed(2)}</div>
            <div className="edit-by">Added by {creatorUsername} on {expense.createdAt.slice(0,10)}</div>
              {/* <button className="edit-expense-button">Edit Expense</button > */}
            <button className="edit-expense-button" onClick={() => this.toggleModal()}>
              Edit Expense
            </button>
            <div style={this.state.toggle ? { display: "block" } : { display: "none" }}
              className="modal-background" onClick={() => this.toggleModal()} ><EditExpenseFormContainer key={expense.id} expenseId={expense.id}/></div>
            </div>
          </div>
          <hr />
          <div><ExpenseShowContainer expense={expense} /></div>
        </div>
      </>
  )
}}


export default ExpenseIndexItem;