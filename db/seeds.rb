# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create(email:"sz3@sz.com", username:"sz3", password:"1234567")
expense_1 = Expense.create(description:"lunch", total_amount: 50.2, creator_id: 1, settled: false )
expense_2 = Expense.create(description:"jenny's kitchen", total_amount: 25.52, creator_id: 8, settled: false )
####
