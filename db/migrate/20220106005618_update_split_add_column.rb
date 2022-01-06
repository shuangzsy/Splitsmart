class UpdateSplitAddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :splits, :unregistered_user_email, :string
  end
end
