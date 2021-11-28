class Split < ApplicationRecord
  validates :expense_id, :user_id, :owe_amount, presence: true

  belongs_to :expense,
  primary_key: :id,
  foreign_key: :expense_id,
  class_name: :Expense

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User


end
