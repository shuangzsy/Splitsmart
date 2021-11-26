class ChangeExpenses < ActiveRecord::Migration[5.2]
  def change
    remove_index :expenses, :creator_id
    remove_index :expenses, :group_id
    add_index :expenses, :creator_id
    add_index :expenses, :group_id

  end
end
