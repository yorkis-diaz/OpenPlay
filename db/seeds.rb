# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Event.destroy_all


demo_user = User.create!({email: "johndoe@gmail.com", firstname: "John", lastname: "Doe", password: "johndoe"})

event = Event.create!({name: "Volleyball Tournament",
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

event2 = Event.create!({name: "Yu-Gi-Oh! Tournament",
    info: "Participants compete with each other for a chance at the top prices",
    lat: 40.864840,
    lng: -73.882856,
    event_city: "The bronx",
    event_state: "New York",
    event_zipcode: "10458",
    event_country: "United Sates",
    event_type: "Trading Card",
    participation_open_time: '10:00:00',
    participation_close_time: '24:00:00',
    event_duration: 4.00,
    phone: "917-202-1000", 
    skill_level: "Advanced",
    rating: 4,
    address: "2900 Southern Blvd",
    capacity: 24,
    cost: 10
})

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
    rating: 4,
    address: "N Husdon Avenue",
    capacity: 10,
    cost: 40
})

# updated above

event4 = Event.create!({name: "Yu-Gi-Oh! Tournament",
    info: "Participants compete with each other for a chance at the top prices",
    lat: 40.864840,
    lng: -73.882856,
    event_city: "Pasadena",
    event_state: "California",
    event_zipcode: "10458",
    event_country: "United Sates",
    event_type: "Trading Card",
    participation_open_time: '10:00:00',
    participation_close_time: '20:00:00',
    event_duration: 4.00,
    phone: "917-202-1000", 
    skill_level: "Advanced",
    rating: 4,
    address: "2900 Southern Blvd",
    capacity: 24,
    cost: 10
})


event5 = Event.create!({name: "Yu-Gi-Oh! Tournament",
    info: "Participants compete with each other for a chance at the top prices",
    lat: 40.864840,
    lng: -73.882856,
    event_city: "The bronx",
    event_state: "New York",
    event_zipcode: "10458",
    event_country: "United Sates",
    event_type: "Trading Card",
    participation_open_time: '10:00:00',
    participation_close_time: '20:00:00',
    event_duration: 4.00,
    phone: "917-202-1000", 
    skill_level: "Advanced",
    rating: 4,
    address: "2900 Southern Blvd",
    capacity: 24,
    cost: 10
})

event6 = Event.create!({name: "Volley Tournament The bronx",
    info: "Teams of two compete to end top prices",
    lat: 40.735091,
    lng: -73.990801,
    event_city: "New York City",
    event_state: "New York",
    event_zipcode: "10003",
    event_country: "United Sates",
    event_type: "Volleyball",
    participation_open_time: '09:00:00',
    participation_close_time: '17:00:00',
    event_duration: 1.00,
    phone: "212-222-2200", 
    skill_level: "Beginners",
    rating: 4,
    address: "E 10th Street",
    capacity: 12,
    cost: 20
})

event7 = Event.create!({name: "Yu-Gi-Oh! Tournament",
    info: "Participants compete with each other for a chance at the top prices",
    lat: 40.864840,
    lng: -73.882856,
    event_city: "The bronx",
    event_state: "New York",
    event_zipcode: "10458",
    event_country: "United Sates",
    event_type: "Trading Card",
    participation_open_time: '10:00:00',
    participation_close_time: '20:00:00',
    event_duration: 4.00,
    phone: "917-202-1000", 
    skill_level: "Advanced",
    rating: 4,
    address: "2900 Southern Blvd",
    capacity: 24,
    cost: 10
})

reservation = Reservation.create!({time: "04:00:00", num_participants: 3, date: "2019-12-22", participant_id: demo_user.id, event_id: event.id})
reservation2 = Reservation.create!({time: "05:00:00", num_participants: 2, date: "2019-12-22", participant_id: demo_user.id, event_id: event3.id})
review = Review.create!({body: "The venue is very clean and well maintained", rating: 5, reviewer_id: demo_user.id, event_id: event.id, reservation_id: reservation.id})
review2 = Review.create!({body: "The venue is excellent", rating: 4, reviewer_id: demo_user.id, event_id: event3.id, reservation_id: reservation2.id})
savedevent = SavedEvent.create({user_id: demo_user.id, event_id: event4.id})