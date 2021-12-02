json.expenses do
    @expenses.each do |expense|
        json.set! expense.id do
            json.partial! 'api/expenses/expense', expense: expense
            json.splitIds expense.split_ids
        end
    end
end
