class UpdateGroup < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :user_id, :integer, null:false
  end
end
