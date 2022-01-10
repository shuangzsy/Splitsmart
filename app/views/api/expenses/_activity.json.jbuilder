json.extract! activity, :id, :expense_id, :participant_id, :event
json.username activity.participant.username 
json.expense activity.expense.description