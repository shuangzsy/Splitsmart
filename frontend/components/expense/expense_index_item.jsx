import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseShowContainer from './expense_show_container';

const ExpenseIndexItem = ({ expense, deleteExpense }) => {
  return (
      <li className="expense-item-details">
        <div>
          <span>{expense.createdAt}</span>
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638476337/Screen_Shot_2021-12-02_at_12.17.59_PM_mk8tvd.png" alt="" />
          <Link to={`/all/${expense.id}`}>{expense.description}</Link>
          <ExpenseShowContainer expense={expense} />
        </div>
        <div>
          <Link to={`/expenses/${expense.id}/edit`}>Edit</Link>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
      </li>
  )
}

export default ExpenseIndexItem;