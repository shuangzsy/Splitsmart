class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.text :description, null:false
      t.float :total_amount, null:false
      t.integer :creator_id, null:false
      t.date :create_date, null:false
      t.integer :group_id
      t.boolean :settled, null:false
      t.timestamps
    end
    add_index :expenses, :creator_id, unique: true
    add_index :expenses, :group_id,  unique: true
  end
end
