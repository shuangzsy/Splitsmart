class Activity < ApplicationRecord
  validates :expense_id, :event, presence: true

  belongs_to :expense,
  primary_key: :id,
  foreign_key: :expense_id,
  class_name: :Expense

  belongs_to :participant,
  primary_key: :id,
  foreign_key: :participant_id,
  class_name: :User

end
