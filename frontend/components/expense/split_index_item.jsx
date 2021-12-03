import React from 'react';
import { Link } from 'react-router-dom';

const SplitIndexItem = ({ split, deleteExpense }) => {
  return (
    <li className="split-item-details">
      <div>
        <p>hello world</p>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638476337/Screen_Shot_2021-12-02_at_12.17.59_PM_mk8tvd.png" alt="" />
      </div>
      <div>
        <Link to={`/expenses/${expense.id}/edit`}>Edit</Link>
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </div>


    </li>
  )
}

export default SplitIndexItem;