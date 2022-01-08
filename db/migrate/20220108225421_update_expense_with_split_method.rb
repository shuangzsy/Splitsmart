class UpdateExpenseWithSplitMethod < ActiveRecord::Migration[5.2]
  def change
    add_column :expenses, :split_method, :string, default: 'equally'
  end
end
