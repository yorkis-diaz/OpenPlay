# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


SavedEvent.destroy_all
Review.destroy_all
Reservation.destroy_all
User.destroy_all
Event.destroy_all



demo_user = User.create!({email: "johndoe@gmail.com", firstname: "John", lastname: "Doe", password: "johndoe"})

event1 = Event.create!({name: "Volleyball Tournament",
    info: "Participants complete in teams of 6v6 in this Volleyball tournament",
    lat: 25.818686,
    lng: -80.120596,
    event_city: "Miami Beach",
    event_state: "Florida",
    event_zipcode: "33140",
    event_country: "United Sates",
    event_type: "Volleyball",
    participation_open_time: '09:00:00',
    participation_close_time: '17:00:00',
    event_duration: 1.00,
    phone: "305-444-1000", 
    skill_level: "Beginners",
    rating: 4,
    address: "Collins Ave",
    capacity: 12,
    cost: 20
})

event1_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/volleyball.jpeg")
event1.photo.attach(io: event1_photo, filename: 'volleyball.jpeg')

event3 = Event.create!({name: "Basketball Event",
    info: "Groups are split in teams of 5 to complete in this exciting event",
    lat: 41.897940,
    lng: -87.639796,
    event_city: "Chicago",
    event_state: "Illinois",
    event_zipcode: "60610",
    event_country: "United Sates",
    event_type: "Basketball",
    participation_open_time: '14:00:00',
    participation_close_time: '20:00:00',
    event_duration: 1.00,
    phone: "312-320-8000", 
    skill_level: "Intermediate",
    rating: 3,
    address: "N Husdon Avenue",
    capacity: 10,
    cost: 40
})

event3_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/basketball2.jpeg")
event3.photo.attach(io: event3_photo, filename: 'basketball2.jpeg')


event4 = Event.create!({name: "Tennis Event",
    info: "Come join our tennis matches and play with likeminded tennis lovers",
    lat: 40.741591,
    lng: -74.002178,
    event_city: "Midtown Manhattan",
    event_state: "New York",
    event_zipcode: "10011",
    event_country: "United Sates",
    event_type: "Tennis",
    participation_open_time: '10:00:00',
    participation_close_time: '15:00:00',
    event_duration: 1.00,
    phone: "212-909-0000", 
    skill_level: "Beginners",
    rating: 4,
    address: "West 16th Street",
    capacity: 6,
    cost: 30
})
event4_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/tennis1.jpeg")
event4.photo.attach(io: event4_photo, filename: 'tennis1.jpeg')


event5 = Event.create!({name: "Soccer At The Park",
    info: "Crowds gather at our long running soccer matches events to see excited participants complete foot to foot to win!",
    lat: 34.180327,
    lng: -118.489652,
    event_city: "Los Angeles",
    event_state: "California",
    event_zipcode: "10458",
    event_country: "United Sates",
    event_type: "Soccer",
    participation_open_time: '09:00:00',
    participation_close_time: '15:00:00',
    event_duration: 2.00,
    phone: "818-222-0000", 
    skill_level: "Intermediate",
    rating: 5,
    address: "Woodley Ave",
    capacity: 22,
    cost: 40
})

event5_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/soccer2.jpeg")
event5.photo.attach(io: event5_photo, filename: 'soccer2.jpeg')

event6 = Event.create!({name: "Chess Valley",
    info: "Join us and enjoy fast pace thinking and opponents that will push your limits",
    lat: 29.963745,
    lng: -90.067849,
    event_city: "New Orleans",
    event_state: "Louisiana",
    event_zipcode: "70116",
    event_country: "United Sates",
    event_type: "Chess",
    participation_open_time: '08:00:00',
    participation_close_time: '15:00:00',
    event_duration: 1.00,
    phone: "212-222-2200", 
    skill_level: "Advanced",
    rating: 4,
    address: "St Philip Street",
    capacity: 8,
    cost: 15
})

event6_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/chess2.jpeg")
event6.photo.attach(io: event6_photo, filename: 'chess2.jpeg')

event7 = Event.create!({name: "IT Convention",
    info: "Our event showcases local talents that want to compete against other tech savy people",
    lat: 36.119846,
    lng: -115.176400,
    event_city: "Las Vegas",
    event_state: "Nevada",
    event_zipcode: "89109",
    event_country: "United Sates",
    event_type: "Tech",
    participation_open_time: '07:00:00',
    participation_close_time: '14:00:00',
    event_duration: 2.00,
    phone: "702-222-0000", 
    skill_level: "Advanced",
    rating: 3,
    address: "2900 Southern Blvd",
    capacity: 15,
    cost: 70
})

event7_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/it_convention.jpeg")
event7.photo.attach(io: event7_photo, filename: 'it_convention.jpeg')

event8 = Event.create!({name: "Kayaking Adventure",
    info: "We provide unforgettable, exhilarating advetures to all participants",
    lat: 41.084245,
    lng: -73.830236,
    event_city: "Tarrytown",
    event_state: "New York",
    event_zipcode: "10591",
    event_country: "United Sates",
    event_type: "Kayak",
    participation_open_time: '09:00:00',
    participation_close_time: '16:00:00',
    event_duration: 2.00,
    phone: "914-222-0101", 
    skill_level: "Intermediate",
    rating: 4,
    address: "Old Saw Mill River Rd",
    capacity: 8,
    cost: 45
})

event8_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/kayaking.jpeg")
event8.photo.attach(io: event8_photo, filename: 'kayaking.jpeg')

event9 = Event.create!({name: "Bowling Event",
    info: "In the heart of the city, have a great time playing alongside other locals",
    lat: 40.759017,
    lng: -73.991287,
    event_city: "Manhattan",
    event_state: "New York",
    event_zipcode: "10036",
    event_country: "United Sates",
    event_type: "Bowling",
    participation_open_time: '13:00:00',
    participation_close_time: '18:00:00',
    event_duration: 1.00,
    phone: "212-222-0001", 
    skill_level: "Intermediate",
    rating: 3,
    address: "West 43rd Street",
    capacity: 4,
    cost: 20
})

event9_photo = open("https://open-play-seed.s3.amazonaws.com/events-images/bowling.jpeg")
event9.photo.attach(io: event9_photo, filename: 'bowling.jpeg')

#new Events added \/
event10 = Event.create!({name: "Kite Flying",
    info: "Show off your favorite kite in this community event that showcases some of the best kite designs around.",
    lat: 36.835413,
    lng: -75.970376,
    event_city: "Virginia Beach",
    event_state: "Virginia",
    event_zipcode: "23451",
    event_country: "United Sates",
    event_type: "Kite",
    participation_open_time: '10:00:00',
    participation_close_time: '16:00:00',
    event_duration: 1.00,
    phone: "767-222-0001", 
    skill_level: "Intermediate",
    rating: 4,
    address: "Atlantic Avenue",
    capacity: 10,
    cost: 15
})

event10_photo = open("https://open-play-seed.s3.amazonaws.com/kite.jpeg")
event10.photo.attach(io: event10_photo, filename: 'kite.jpeg')

event11 = Event.create!({name: "Surfing Event",
    info: "Surf amongst the most competitive locals in Santa Cruz",
    lat: 36.951844,
    lng: -122.028994,
    event_city: "Santa Cruz",
    event_state: "California",
    event_zipcode: "95060",
    event_country: "United Sates",
    event_type: "Surfing",
    participation_open_time: '07:00:00',
    participation_close_time: '12:00:00',
    event_duration: 2.00,
    phone: "831-222-0001", 
    skill_level: "Advanced",
    rating: 3,
    address: "W Cliff Dr",
    capacity: 7,
    cost: 40
})

event11_photo = open("https://open-play-seed.s3.amazonaws.com/surfing.jpeg")
event11.photo.attach(io: event11_photo, filename: 'surfing.jpeg')

event12 = Event.create!({name: "Bicycle Event",
    info: "Compete in a high adrenaline closed course bicycle race.",
    lat: 29.477954,
    lng: -98.476993,
    event_city: "San Antonio",
    event_state: "Texas",
    event_zipcode: "78209",
    event_country: "United Sates",
    event_type: "Bicycle",
    participation_open_time: '10:00:00',
    participation_close_time: '13:00:00',
    event_duration: 1.00,
    phone: "210-111-0001", 
    skill_level: "Intermediate",
    rating: 2,
    address: "Alamo Heights",
    capacity: 6,
    cost: 10
})

event12_photo = open("https://open-play-seed.s3.amazonaws.com/bicycles_2.jpeg")
event12.photo.attach(io: event12_photo, filename: 'bicycles_2.jpeg')

event13 = Event.create!({name: "Go Karting",
    info: "Race in this competitive go karting event that push people to their limits.",
    lat: 28.070241,
    lng: -82.434375,
    event_city: "Tampa",
    event_state: "Florida",
    event_zipcode: "33613",
    event_country: "United Sates",
    event_type: "Go Kart",
    participation_open_time: '09:00:00',
    participation_close_time: '18:00:00',
    event_duration: 1.00,
    phone: "813-813-0001", 
    skill_level: "Advanced",
    rating: 5,
    address: "North 22nd Street",
    capacity: 13,
    cost: 50
})

event13_photo = open("https://open-play-seed.s3.amazonaws.com/gokart.jpeg")
event13.photo.attach(io: event13_photo, filename: 'gokart.jpeg')

reservation = Reservation.create!({time: "16:00:00", num_participants: 3, date: "2019-12-22", phone_number: "2123231000", participant_id: demo_user.id, event_id: event1.id})
reservation2 = Reservation.create!({time: "17:00:00", num_participants: 2, date: "2019-12-22", phone_number: "2125551000", participant_id: demo_user.id, event_id: event3.id})
reservation3 = Reservation.create!({time: "11:00:00", num_participants: 2, date: "2019-12-15", phone_number: "2123231000", participant_id: demo_user.id, event_id: event8.id})
reservation4 = Reservation.create!({time: "14:00:00", num_participants: 1, date: "2019-12-22", phone_number: "2125551000", participant_id: demo_user.id, event_id: event4.id})
review = Review.create!({body: "The venue is very clean and well maintained", rating: 5, reviewer_id: demo_user.id, event_id: event1.id, reservation_id: reservation.id})
review2 = Review.create!({body: "The venue is excellent", rating: 4, reviewer_id: demo_user.id, event_id: event3.id, reservation_id: reservation2.id})
savedevent = SavedEvent.create({user_id: demo_user.id, event_id: event4.id})
savedevent2 = SavedEvent.create({user_id: demo_user.id, event_id: event8.id})
savedevent3 = SavedEvent.create({user_id: demo_user.id, event_id: event6.id})

