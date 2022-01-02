import { connect } from 'react-redux';
import { requestFriends, deleteFriend } from '../../actions/friend_action';
import FriendIndex from './friend_index';


const mSTP = (state) => ({
  friends: Object.values(state.entities.friends),
});

const mDTP = (dispatch) => ({
  requestFriends: () => dispatch(requestFriends()),
  deleteFriend: friendId => dispatch(deleteFriend(friendId))
})

export default connect(mSTP, mDTP)(FriendIndex);