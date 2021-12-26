import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseShowContainer from './expense_show_container';

const ExpenseIndexItem = ({ expense, deleteExpense }) => {
  return (
      <div className="expense-item-details">
        <div className="expense-info">
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638476337/Screen_Shot_2021-12-02_at_12.17.59_PM_mk8tvd.png" alt="" />
          <div>
            <div>{expense.description}</div>
            <div className="total-amount">${expense.totalAmount}</div>
            <div className="edit-by">Added by ... on {expense.createdAt}</div>
            <button className="edit-expense-button">Edit Expense</button >
            <ExpenseShowContainer expense={expense} />
          </div>
        </div>
        <div>       
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
      </div>
  )
}

export default ExpenseIndexItem;