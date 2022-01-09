# json.expense do 
#   json.extract! expense, :id, :description, :total_amount, :creator_id, :settled, :created_at, :group_name
# end

# json.splits do
#   expense.splits.each do |split|
#       json.set! split.id do
#           json.extract! split, :id, :user_id, :owe_amount
#       end
#   end
# end

json.extract! expense, :id, :description, :total_amount, :creator_id, :settled, :created_at, :group_name, :payer, :split_method