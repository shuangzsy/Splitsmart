import React from 'react';
import { Link } from 'react-router-dom';

/*
Write an `EventShow` presentational component that renders an event's 
information (description and date). This component should receive the event  
from the store as props via its container and fetch it once it has successfully
mounted to the DOM. Additionally, this component should contain a link back to 
the `EventIndex`.
*/

class ExpenseShow extends React.Component {
  componentDidMount() {
    this.props.requestExpense(this.props.match.params.expenseId);
  }

  render() {
    return (
      <div>
        <p>{this.props.expense.description}</p>
        <p>{this.props.expense.total_amount}</p>
        <Link to="/all">All Expense</Link>
      </div>
    )
  }
}

export default ExpenseShow;