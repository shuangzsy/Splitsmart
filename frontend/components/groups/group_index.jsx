import React from 'react';
import GroupIndexItem from './group_index_item';
import { Link } from 'react-router-dom';

class GroupIndex extends React.Component {
  constructor(props) {
    super(props)

    // this.state 
  }

  componentDidMount() {
    this.props.requestGroups();
  }

  render() {
    const { groups, deleteGroup } = this.props;
    return (
      <div>
        <ul>
          {
            groups.map(group => <GroupIndexItem key={group.id} group={group} deleteGroup={deleteGroup} />)
          }
        </ul>
      </div>
    )
  }
}

export default GroupIndex;
