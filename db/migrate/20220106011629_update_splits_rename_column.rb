class UpdateSplitsRenameColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :splits, :unregistered_user_email, :user_email
  end
end
