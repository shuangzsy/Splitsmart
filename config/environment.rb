# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# conversion
Jbuilder.key_format camelize: :lower