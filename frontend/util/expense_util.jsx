export const createExpense = ( expense, splits ) => (
  $.ajax({
    method: 'POST',
    url: '/api/expenses',
    data: { expense, splits }
    // data: {payload}
  })
);

export const getExpenses = () => (
  $.ajax({
    method: 'GET',
    url: '/api/expenses'
  })
);

export const getExpense = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/expenses/${id}`
  })
);

export const updateExpense = (expense, splits) => (
  $.ajax({
    method: 'PATCH',
    url: `api/expenses/${expense.id}`,
    data: { expense, splits }
  })
);

export const deleteExpense = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/expenses/${id}`
  })
);