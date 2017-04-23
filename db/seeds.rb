# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

list1 = List.create({name: 'Daily to do'})
list1.items.create([{text: 'Grocery shop', done: false}, {text: 'Meal prep', done: false}])

list2 = List.create({name: 'Schoolwork'})
list2.items.create([{text: 'Science hw 1', done: false}, {text: 'Test prep', done: false}])
