import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const receiveCurrentUser = ({user, expenses}) => ({
  type: RECEIVE_CURRENT_USER,
  user,
  expenses
});

export const removeCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(payload => (
    dispatch(receiveCurrentUser(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(payload => (
    dispatch(receiveCurrentUser(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(removeCurrentUser())
  ))
);