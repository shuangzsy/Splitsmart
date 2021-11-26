import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import { Link } from 'react-router-dom';

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
        <ul>
          {
            expenses.map(expense => <ExpenseIndexItem expense={expense} deleteExpense={deleteExpense} />)
          }
        </ul>
        <Link to="/expenses/new">Add Expense</Link>
      </div>
    )
  }
}

export default ExpenseIndex;
