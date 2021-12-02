import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseIndexItem = ({ expense, deleteExpense }) => {
  return (
    <li>
      <p>{expense.createdAt}</p>
      <Link to={`/all/${expense.id}`}>{expense.description}</Link>
      <Link to={`/expenses/${expense.id}/edit`}>Edit</Link>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </li>
  )
}

export default ExpenseIndexItem;