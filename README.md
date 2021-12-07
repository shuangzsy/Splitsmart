# Splitsmart

A Splitwise clone for friends to split costs between friends and family members.

# Development
# 1. Expenses
Users can record a expense split between themselves and another user, choosing who made the initial payment. The expense is recorded for both users, and a running balance is calculated and displayed. A user can view expenses and splits between another user, as well as between all their expenses and friends. Expenses can also be deleted and can only be viewed by those involved.

```
json.user do
    json.extract! user, :id, :email, :username
end

json.expenses do
    @user.expenses.each do |expense|
        json.set! expense.id do
            json.extract! expense, :id, :description, :total_amount, :creator_id, :settled, :created_at, :group_name
        end
    end
end
```

Schema is created in a very flexible way, which enable the uers to split with mutiple users and using defferent splits way.


