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

export const removeFriend = friend => ({
  type: REMOVE_FRIEND,
  friend
})


export const requestFriends = () => (dispatch) => (
  FriendAPIUtil.getFriends().then(
    (friends) => { dispatch(receiveFriends(friends)) }
  )
);

export const requestExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.getExpense(expenseId).then(
    (payload) => { dispatch(receiveExpense(payload)) }
  )
);

export const createExpense = (expense, splits) => (dispatch) => (
  ExpenseAPIUtil.createExpense(expense, splits).then((payload) => {
    dispatch(receiveExpense(payload))
  })
);

export const updateExpense = (expense, splits) => (dispatch) => (
  ExpenseAPIUtil.updateExpense(expense, splits).then((payload) => {
    dispatch(receiveExpense(payload))
  })
);

export const deleteExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.deleteExpense(expenseId).then(({ expense }) => dispatch(removeExpense(expense.id)))
);
