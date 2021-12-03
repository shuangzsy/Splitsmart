import React from 'react';
import { Link } from 'react-router-dom';


class ExpenseShow extends React.Component {
  componentDidMount() {
    this.props.requestExpense(this.props.match.params.expenseId);
    
  }

  render() {
    console.log(this.props.splits)
    if (this.props.splits[0] === undefined) return "";
    return (
      <div>
        <div>{
          this.props.splits.map(split => {
            return(
              <div>
                <li>{split.email}</li>
                <li>{split.oweAmount}</li>
              </div>
            )
          })
        }</div>
      </div>
    )
  }
}

export default ExpenseShow;