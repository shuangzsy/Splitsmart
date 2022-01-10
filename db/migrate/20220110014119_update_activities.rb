class UpdateActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :participant_id, :integer, null:false
  end
end
