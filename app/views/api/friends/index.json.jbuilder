@friends.each do |friend|
  json.set! friend.id do
    json.extract! friend, :id, :user_id, :friend_email
  end
end