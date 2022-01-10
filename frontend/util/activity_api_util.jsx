export const getActivities = () => (
  $.ajax({
    url: `/api/activities`,
    method: "GET",
  })
);

export const getActivity= (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/activities/${id}`
  })
);

export const createActivity = (activity) => (
  $.ajax({
    method: 'POST',
    url: '/api/activities',
    data: { activity }
  })
);

// export const deleteFriend = (id) => (
//   $.ajax({
//     method: 'DELETE',
//     url: `/api/friends/${id}`
//   })
// );

