class Expense < ApplicationRecord
  # validates :settled, inclusion: { in: [true, false] }
  # validates :description, :total_amount, :creator_id, :settled, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User



end
