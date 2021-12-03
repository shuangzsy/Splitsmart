json.expenses do
    @expenses.each do |expense|
        json.set! expense.id do
            json.partial! 'api/expenses/expense', expense: expense
            json.splitIds expense.split_ids
        end
    end
end

json.splits do 
    @expenses.each do |expense|
        expense.splits.each do |split|
            json.set! split.id do
                json.partial! 'api/expenses/split', split: split
            end
        end
    end
end
