export const getFriends = () => (
  $.ajax({
    url: `/api/friends`,
    method: "GET",
  })
);

export const getFriend = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/friends/${id}`
  })
);

export const createFriend = (friend) => (
  $.ajax({
    method: 'POST',
    url: '/api/friends',
    data: { friend }
  })
);

export const deleteFriend = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friends/${id}`
  })
);

