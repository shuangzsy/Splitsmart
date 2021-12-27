class UpdateExpense < ActiveRecord::Migration[5.2]
  def change
    add_column :expenses, :payer, :string
  end
end
