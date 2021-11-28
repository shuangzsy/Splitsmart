class CreateSplits < ActiveRecord::Migration[5.2]
  def change
    create_table :splits do |t|
      t.integer :expense_id, null: false
      t.integer :user_id, null: false
      t.float :owe_amount, null:false
      t.timestamps
    end
    add_index :splits, :expense_id
    add_index :splits, :user_id
  end
end
