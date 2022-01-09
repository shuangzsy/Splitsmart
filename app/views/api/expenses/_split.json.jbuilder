json.extract! split, :id, :expense_id, :user_id, :owe_amount, :user_email
json.email split.user.email
json.username split.user.username