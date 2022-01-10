# json.partial! 'api/expenses/expense', expense: @expense
json.expense do 
  json.partial! 'api/expenses/expense', expense: @expense
  json.splitIds @expense.split_ids
end

json.splits do
  @expense.splits.each do |split|
      json.set! split.id do
          json.partial! 'api/expenses/split', split: split
      end
  end
end


# json.activity do
#   @expense.activities.each do |activity|
#     json.set! activity.id do 
#       json.partial! 'api/expenses/activity', activity: activity
#     end
#   end
# end