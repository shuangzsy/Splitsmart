import React from 'react';
import { Link } from 'react-router-dom';

const SplitIndexItem = ({ split, expenses, currentUser, currentUsername }) => {
  let splitAmount;
  if(split.oweAmount <= 0){
    let expenseId = split.expenseId;
    expenses.map(expense => {
      if (expense.id === expenseId){
        splitAmount = expense.totalAmount
      }
    })}

    if (split.oweAmount > 0) return (
      <div className='split-show-details-owe-you'>
          <div> <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638517195/Screen_Shot_2021-12-02_at_11.39.35_PM_bwjsnw.png" alt="" /></div>
          <div>
            <Link to="/all">
            <div className='split-show-details-owe-you-user'>{` ${split.username}`} </div>
            <div className='split-show-details-owe-you-info'> 
              <span>owes you </span>
              {`$${(split.oweAmount).toFixed(2)}`} 
            </div>
            </Link>
          </div>
      </div>
      )
    else if (splitAmount && split.oweAmount <= 0) return(
      <div className='split-show-details-you-owe'>
        <div><img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638517195/Screen_Shot_2021-12-02_at_11.39.28_PM_rh8ezb.png" alt="" /></div>
        <div>
          <Link to="/all">
            <div className='split-show-details-you-owe-user'>{`${currentUsername}`}</div>
            <div className='split-show-details-you-owe-info'>
              <span>you owe {`${split.username}`} </span>
              {`$${(splitAmount).toFixed(2)}`}
            </div>
          </Link>
        </div>
      </div>
      )
    else return "" ;  
}

export default SplitIndexItem;