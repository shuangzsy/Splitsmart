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