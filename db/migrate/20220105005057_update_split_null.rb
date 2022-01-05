class UpdateSplitNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :splits, :user_id, true
  end
end
