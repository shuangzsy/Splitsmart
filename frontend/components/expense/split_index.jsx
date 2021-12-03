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
    const { expenses, splits, deleteExpense } = this.props;
    return (
      <div>
            <ul>
              {
                splits.map(split=> <SplitIndexItem key={split.id} split={split} deleteExpense={deleteExpense} />)
              }
            </ul>
      </div>
    )
  }
}

export default SplitIndex;
