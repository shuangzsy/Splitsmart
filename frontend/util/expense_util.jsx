export const createExpense = (expense, split) => (
  $.ajax({
    method: 'POST',
    url: '/api/expenses',
    data: { expense, split }
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

export const updateExpense = (expense) => (
  $.ajax({
    method: 'PATCH',
    url: `api/expenses/${expense.id}`,
    data: { expense }
  })
);

export const deleteExpense = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/expenses/${id}`
  })
);