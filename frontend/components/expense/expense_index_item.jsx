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

  return (
      <>
        <div className="expense-overview" onClick={clickToShow}>
          <span>{expense.createdAt}</span>
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638476337/Screen_Shot_2021-12-02_at_12.17.59_PM_mk8tvd.png" alt="" /> 
          <span>{expense.description}</span>
        </div>
        <div id={expense.id} className="all-expense-item-details">
          <div className="expense-info">
            <div>
            <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1640543861/catg_qxrt5q.png" alt="" />
            </div>
            <div>
              <div className="expense-description">{expense.description}</div>
              <div className="total-amount">${expense.totalAmount}</div>
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