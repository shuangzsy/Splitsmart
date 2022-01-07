class Group < ApplicationRecord
  validates :group_name, presence: true

  belongs_to :group_creater,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
