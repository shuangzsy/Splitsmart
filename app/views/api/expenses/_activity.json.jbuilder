# debugger
json.extract! activity, :id, :expense_id, :participant_id, :event, :created_at
json.username activity.participant.username 
json.description activity.expense.description