# debugger
json.extract! activity, :id, :expense_id, :participant_id, :event
json.username activity.participant.username 
json.description activity.expense.description