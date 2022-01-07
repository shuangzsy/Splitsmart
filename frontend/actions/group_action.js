import * as GroupAPIUtil from '../util/group_api_util';
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";
export const REMOVE_GROUP_ERRORS = "REMOVE_GROUP_ERRORS";


export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
})

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
})

export const removeGroup = groupId => ({
  type: REMOVE_GROUP,
  groupId
})

export const receiveGroupErrors = errors => ({
  type: RECEIVE_GROUP_ERRORS,
  errors
});

export const removeGroupErrors = () => ({
  type: REMOVE_GROUP_ERRORS,
});


export const requestGroups = () => (dispatch) => (
  GroupAPIUtil.getGroups().then(
    (groups) => { dispatch(receiveGroups(groups)) }
  )
);

export const requestGroup = (groupId) => (dispatch) => (
  GroupAPIUtil.getGroup(groupId).then(
    (group) => { dispatch(receiveGroup(group)) }
  )
);

export const createGroup = (group) => (dispatch) => (
  GroupAPIUtil.createGroup(group).then(
    group => (dispatch(receiveGroup(group))
    ), err => (
      dispatch(receiveGroupErrors(err.responseJSON))
    ))
);

export const deleteGroup = (groupId) => (dispatch) => (
  GroupAPIUtil.deleteGroup(groupId).then((group) => dispatch(removeGroup(group.id)))
);
