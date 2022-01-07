@groups.each do |group|
  json.set! group.id do
    json.extract! friend, :id, :user_id, :group_name
  end
end