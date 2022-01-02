class Friend < ApplicationRecord
  validates :user_id, :friend_email, presence: true
  validates :friend_email, format: { with: URI::MailTo::EMAIL_REGEXP }

  belongs_to :friendship,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  # belongs_to :friend,
  # primary_key: :id,
  # foreign_key: :friend_id,
  # class_name: :User

end
