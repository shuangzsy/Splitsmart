import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal';
import SplitIndexContainer from '../expense/split_index_container';

class CenterNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    if (this.props.splits){
      var userOwe = 0;
      var userOwed = 0;
      var userBalance = 0;
      this.props.splits.map(
        split => {
          if (split.username === this.props.currentUser.username){
            if (split.oweAmount < 0){
              userOwed += split.oweAmount;
            }else{
              userOwe += split.oweAmount;
            }
          }
        }
      )
      userBalance = -userOwe - userOwed;
    }

    if (!this.props.splits) {
      return (
        <div>building data...</div>
      )
    } else {
        return (
          <div>
            <Modal />
            <div className="top_bar">
              <span>Dashboard</span>
              {this.props.AddExpense}
            </div>
            <div >
              <ul className="center-bar-body">
                <li>
                  <div >total balance </div>
                  { userBalance > 0 ?
                  <div className='positive'>+${userBalance.toFixed(2)}</div> :
                  <div className='negative'>-${-userBalance.toFixed(2)}</div>
                  }
                  </li>
                <li>
                  <div>you owe </div> 
                  <div className='negative'>${userOwe}</div>
                </li>
                <li>
                  <div>you are owed </div>  
                  <div className='positive'>${-userOwed}</div> 
                </li>
              </ul>
            </div>
            <div className="you-owe-label">
              <p>YOU OWE</p>
              <p>YOU ARE OWED</p>
            </div>
            <div>
              <SplitIndexContainer/>
            </div>
          </div>
        )
      }
    }
  }

export default CenterNav;
