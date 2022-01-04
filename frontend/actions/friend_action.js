import * as FriendAPIUtil from '../util/friend_api_util';
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";


export const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
})

export const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
})

export const removeFriend = friendId => ({
  type: REMOVE_FRIEND,
  friendId
})


export const requestFriends = () => (dispatch) => (
  FriendAPIUtil.getFriends().then(
    (friends) => { dispatch(receiveFriends(friends)) }
  )
);

export const requestFriend = (friendId) => (dispatch) => (
  FriendAPIUtil.getFriend(friendId).then(
    (friend) => { dispatch(receiveFriend(friend)) }
  )
);

export const createFriend = (friend) => (dispatch) => (
  FriendAPIUtil.createFriend(friend).then((friend) => {
    dispatch(receiveFriend(friend))
  })
);

export const deleteFriend = (friendId) => (dispatch) => (
  FriendAPIUtil.deleteFriend(friendId).then((friend) => dispatch(removeFriend(friend.id)))
);
