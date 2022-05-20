# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating seeds..."
puts "creating users"
user1 = User.create(username: "Sam", email: "sam@gmail.com", password: "password", isNonProfit: false)
user2 = User.create(username: "Lucy", email: "lucy@gmail.com", password: "password", isNonProfit: false)
user3 = User.create(username: "Max", email: "max@gmail.com", password: "password", isNonProfit: false)
user4 = User.create(username: "Adam", email: "adam@gmail.com", password: "password", isNonProfit: false)
user5 = User.create(username: "Lizard", email: "lizard@gmail.com", password: "password", isNonProfit: false)
user6 = User.create(username: "Wiz", email: "wiz@gmail.com", password: "password", isNonProfit: false)
user7 = User.create(username: "Lexia", email: "Lexia@gmail.com", password: "password", isNonProfit: false)
user8 = User.create(username: "Shelter For You", email: "Shelt@gmail.com", password: "password", isNonProfit: true)

puts "creating posts"
post1 = Post.create(title: "ultimate bottles", content: "got a big stack of glass bottles!", user_id: user1.id)
post2 = Post.create(title: "loads of plastic", content: "got plastic bottles, about 100 bottles worth $.50 each.", user_id: user2.id)
post3 = Post.create(title: "Glass Galore", content: "Just finished aa crazy night at the bar and have loads of bottles!", user_id: user3.id)

puts "creating bottles"

bottles1 = Bottle.create(picture:"https://thumbs.dreamstime.com/b/budapest-hungary-august-street-trash-cans-filled-garbage-cans-plastic-bottles-scans-up-to-top-street-trash-170472833.jpg", isGlass: true, isClaimed: false, post_id: post1.id)
bottles2 = Bottle.create(picture:"https://i.cbc.ca/1.5333783.1578424433!/fileImage/httpImage/shutterstock-large-file.jpg", isGlass: false, isClaimed: false, post_id: post2.id)
bottles3 = Bottle.create(picture:"https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/c/94/c9412d29-4199-59f3-b6c6-f1cf18430df4/5d150df1ecf29.image.jpg?resize=375%2C500", isGlass: true, isClaimed: false, post_id: post3.id)

puts "creating comments"

comment1 = Comment.create(content: "great bottles", user_id: user5.id, post_id: post1.id)
comment2 = Comment.create(content: "fantastic bottles", user_id: user4.id, post_id: post2.id)
comment3 = Comment.create(content: "LOOK AT THOSE bottles", user_id: user3.id, post_id: post3.id)
comment4 = Comment.create(content: "talk about recycling!", user_id: user1.id, post_id: post1.id)
comment5 = Comment.create(content: "i love your recyling efforts", user_id: user2.id, post_id: post2.id)
comment6 = Comment.create(content: "Our shelter appreciate your stuff!", user_id: user8.id, post_id: post3.id)
comment7 = Comment.create(content: "yay bottles", user_id: user3.id, post_id: post1.id)
comment8 = Comment.create(content: "what a group bottles", user_id: user2.id, post_id: post2.id)
comment9 = Comment.create(content: "great job organizing these", user_id: user1.id, post_id: post3.id)
comment10 = Comment.create(content: "Love the bottles", user_id: user5.id, post_id: post1.id)
comment11 = Comment.create(content: "Look at them Bottles!", user_id: user6.id, post_id: post2.id)
comment12 = Comment.create(content: "What a great selection!", user_id: user7.id, post_id: post3.id)
comment13 = Comment.create(content: "Is there a way to get these bottles in Germany!", user_id: user2.id, post_id: post1.id)
comment14 = Comment.create(content: "Love this", user_id: user3.id, post_id: post2.id)

puts "creating addresses"
add1 = Address.create(bottle_id: bottles1.id, line_1: "337 Federal Blvd", city:"Denver", state: "CO", country: "US", zipcode: 80211, latitude: 39.7689534, longitude: -105.0255292)
add2 = Address.create(bottle_id: bottles2.id, line_1: "1902 Blake St", city:"Denver", state: "CO", country: "US", zipcode: 80202, latitude: 39.7533366, longitude: -104.995064)
add3 = Address.create(bottle_id: bottles3.id, line_1: "1415 15th Street", city:"Denver", state: "CO", country: "US", zipcode: 80202, latitude: 39.749357, longitude: -104.999601)

puts "finished seeding"



