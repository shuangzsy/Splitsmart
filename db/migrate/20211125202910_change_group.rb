class ChangeGroup < ActiveRecord::Migration[5.2]
  def change
    remove_column :expenses, :group_id
    add_column :expenses, :group_name, :string
    add_index :expenses, :group_name
  end
end
