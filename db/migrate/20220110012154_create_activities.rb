class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :expense_id, null:false
      t.string :event, null:false
      t.timestamps
    end
  end
end
