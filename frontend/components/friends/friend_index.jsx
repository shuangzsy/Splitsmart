import React from 'react';
import FriendIndexItem from './friend_index_item';
import { Link } from 'react-router-dom';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestFriends();
  }

  render() {
    const { friends, deleteFriend } = this.props;
    return (
      <div>
        {/* <div>All friends</div> */}
        <ul>
          {
            friends.map(friend => <FriendIndexItem key={friend.id} friend={friend} deleteFriend={deleteFriend} />)
          }
        </ul>
      </div>
    )
  }
}

export default FriendIndex;
