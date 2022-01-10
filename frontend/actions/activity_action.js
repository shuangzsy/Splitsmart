import * as ActivityAPIUtil from '../util/activity_api_util';
export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";

export const receiveActivities = activities => ({
  type: RECEIVE_ACTIVITIES,
  activities
})

export const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
})

export const requestActivities = () => (dispatch) => (
  ActivityAPIUtil.getActivities().then(
    (activities) => { dispatch(receiveActivities(activities)) }
  )
);

export const requestActivity = (activityId) => (dispatch) => (
  ActivityAPIUtil.getActivity(activityId).then(
    (activity) => { dispatch(receiveActivity(activity)) }
  )
);

export const createActivity = (activity) => (dispatch) => (
  ActivityAPIUtil.createActivity(activity).then(
    (activity) => {dispatch(receiveActivity(activity))}
  )   
);

