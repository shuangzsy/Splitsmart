export const getGroups = () => (
  $.ajax({
    url: `/api/groups`,
    method: "GET",
  })
);

export const getGroup = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/groups/${id}`
  })
);

export const createGroup = (group) => (
  $.ajax({
    method: 'POST',
    url: '/api/groups',
    data: { group }
  })
);

export const deleteGroup = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/groups/${id}`
  })
);

