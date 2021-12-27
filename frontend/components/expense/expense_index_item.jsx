import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseShowContainer from './expense_show_container';



const ExpenseIndexItem = ({ expense, deleteExpense }) => {
  function clickToShow() {
    const expenseItem = document.getElementById(`${expense.id}`);
    console.log(expenseItem.style.display)
    if (expenseItem.style.display === "none" || expenseItem.style.display === ""){
      expenseItem.style.display = "block"
    }else {
      expenseItem.style.display = "none"
    }
  }

  let monthRef = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  return (
      <>
        <div className='expense-overview-window'>
          <div className="expense-overview" onClick={clickToShow}>
            <div className='expense-date'>
              <span className='expense-date-month'>{monthRef[expense.createdAt.slice(5, 7) - 1]}</span>
              <span className='expense-date-number'>{expense.createdAt.slice(8, 10)}</span>
            </div>
            <div><img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638476337/Screen_Shot_2021-12-02_at_12.17.59_PM_mk8tvd.png" alt="" /></div>
            <div className="expenseIndex-desription">{expense.description}</div>
          </div>
          <div className="payer-info">
            <span className='payer-user-info'>{expense.payer} paid </span>
            <span><strong>${Math.abs(expense.totalAmount)}</strong></span>
          </div>
          <div className="ower-info">
            <span className='ower-uer-info'>{expense.payer} lent </span>
            {expense.payer === "you" ?
              <span><strong style={{ color: '#5bc5a7' }}>${Math.abs(expense.totalAmount)*0.5}</strong></span> :
              <span><strong style={{ color: '#ff652f' }}>${Math.abs(expense.totalAmount) * 0.5}</strong></span>
            }
          </div>
        </div>

        <div id={expense.id} className="all-expense-item-details">
          <div className="expense-info">
            <div>
            <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1640543861/catg_qxrt5q.png" alt="" />
            </div>
            <div>
              <div className="expense-description">{expense.description}</div>
              <div className="total-amount">${Math.abs(expense.totalAmount)}</div>
              <div className="edit-by">Added by ... on {expense.createdAt}</div>
              <button className="edit-expense-button">Edit Expense</button >
            </div>
          </div>
          <hr />
          <div><ExpenseShowContainer expense={expense} /></div>
          <div>       
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </div>
        </div>
      </>
  )
}

export default ExpenseIndexItem;