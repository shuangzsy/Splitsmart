class ExpenseRemoveCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :expenses, :create_date
  end
end
