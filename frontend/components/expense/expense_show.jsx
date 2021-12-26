import React from 'react';
import { Link } from 'react-router-dom';


class ExpenseShow extends React.Component {
  componentDidMount() {
    this.props.requestExpense(this.props.expense.id);
    
  }

  render() {
    if (this.props.splits[0] === undefined) return "";
    return (
      <div>
        <div className="split-datails">{
          this.props.splits.map(split => {
            if (split.oweAmount > 0) {
              return(
                <div>
                  <div>
                    {/* <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638517195/Screen_Shot_2021-12-02_at_11.39.35_PM_bwjsnw.png" alt="" />  */}
                    <strong>{split.username}</strong> owes <strong>${split.oweAmount}</strong></div>
                </div>)
                }
            else {
              return(
                <div>
                  <div>
                    {/* <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638517195/Screen_Shot_2021-12-02_at_11.39.28_PM_rh8ezb.png" alt="" /> */}
                    <strong>{split.username}</strong> paid <strong>${split.oweAmount * 2}</strong> and owes <strong>${-split.oweAmount}</strong></div>
                </div>)
            }
          })
        }</div>
      </div>
    )
  }
}

export default ExpenseShow;