class UpdateFriendAddNullFalse < ActiveRecord::Migration[5.2]
  def change
    change_column_null :friends, :friend_email, false
  end
end
