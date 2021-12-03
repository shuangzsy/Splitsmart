import React from 'react';
import SplitIndexItem from './split_index_item';
import { Link } from 'react-router-dom';

class SplitIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestExpenses();
  }

  render() {
    const { splits, deleteExpense, currentUser, currentUsername } = this.props;
    const oweYou = splits.filter(split => split.email !== currentUser && split.oweAmount > 0);
    const youOwe = splits.filter(split => split.email !== currentUser && split.oweAmount < 0);
    return (
      <div className="owe-details">
          <div className ="owe-you-details">
            { 
              oweYou.map(split => {
                return <SplitIndexItem 
                key={split.id} 
                split={split} 
                currentUser = {currentUser}
                currentUsername = {currentUsername}/>
              })
            }
          </div>
          <div className ="you-owe-details">
            {
              youOwe.map(split => {
                return <SplitIndexItem 
                key={split.id} 
                split={split} 
                currentUser = {currentUser}
                currentUsername = {currentUsername}/>
              })
            }
          </div>
      </div>
    )
  }
}

export default SplitIndex;
