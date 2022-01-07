class User < ApplicationRecord
  attr_reader :password
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :email,
            :username,
            :password_digest,
            :session_token,
            presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :expenses,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :Expense

  has_many :splits,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Split

  has_many :friends,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Friend

  has_many :groups,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Group


  # has_many :friends_of,
  # primary_key: :id,
  # foreign_key: :friend_id,
  # class_name: :Friend

  # has_many :friends,
  # through: :friends_of,
  # source: :friender

  # has_many :frienders,
  # through: :friends_on_list,
  # source: :friend

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
