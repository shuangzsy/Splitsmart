class UpdateFriend < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :friend_email
    add_column :friends, :friend_email, :string
  end
end
