# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "foo1@bar.com", password: "secret1")

alex = User.create(
  email:"alex@alex.com",
  password: "12345678",
  first_name: "Alex",
  last_name: "??",
  school: "??")

matt = User.create(
  email:"matt@matt.com",
  password: "12345678",
  first_name: "Matt",
  last_name: "Thompson",
  school: "Launch Academy")

david = User.create(
  email:"david@david.com",
  password: "12345678",
  first_name: "David",
  last_name: "??",
  school: "Brandis")

breakfast = Meal.create(name:"Dinner")
lunch = Meal.create(name:"Lunch")
dinner = Meal.create(name:"Breakfast")

movies = Hashtag.create(tag: "movies")
music = Hashtag.create(tag: "music")
education = Hashtag.create(tag: "education")
career = Hashtag.create(tag: "career")
startups = Hashtag.create(tag: "startups")
reading = Hashtag.create(tag: "reading")

one = Conversation.create(
  meal_id: breakfast.id,
  location: "Brandeis",
  max_seats: 8,
  creator_id: alex.id,
  time: "10:30AM",
  place: "Luchos Pizza",
  title: "Do you have an older dog?"
)

two = Conversation.create(
  meal_id: lunch.id,
  location: "MIT",
  max_seats: 8,
  creator_id: david.id,
  time: "2:00PM",
  place: "MIT Cafeteria",
  title: "Lets talk politics!"
)

three = Conversation.create(
  meal_id: breakfast.id,
  location: "Brandeis",
  max_seats: 4,
  creator_id: alex.id,
  time: "5:00PM",
  place: "The other cafeteria",
  title: "Why is it so hot outside?"
)

ConversationHashtag.create(conversation_id: one.id, hashtag_id: movies.id)
ConversationHashtag.create(conversation_id: one.id, hashtag_id: music.id)
ConversationHashtag.create(conversation_id: two.id, hashtag_id: career.id)
ConversationHashtag.create(conversation_id: two.id, hashtag_id: reading.id)
ConversationHashtag.create(conversation_id: three.id, hashtag_id: startups.id)
ConversationHashtag.create(conversation_id: three.id, hashtag_id: education.id)

UserConversation.create(user_id: alex.id, conversation_id: one.id)
UserConversation.create(user_id: david.id, conversation_id: two.id)
UserConversation.create(user_id: david.id, conversation_id: three.id)