# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo_user = User.create!(email: "johndoe@gmail.com", firstname: "John", lastname: "Doe", password: "johndoe")

event = Event.create!(name: "Volley Tournament",
    info: "Teams of two compete to end top prices",
    lat: 40.735091,
    lng: -73.990801,
    event_city: "New York City",
    event_state: "New York",
    event_zipcode: "10003",
    event_country: "United Sates",
    event_type: "Volleyball",
    participation_open_time: '09:00:00',
    participation_close_time: '05:00:00',
    event_duration: 1.00,
    phone: "212-222-2200", 
    skill_level: "Beginners",
    rating: 4,
    address: "E 10th Street",
    capacity: 12,
    cost: 20
)

reservation = Reservation.create!(time: "time: 04:00:00", num_participants: 3, date: "2019-12-22", participant_id: 1, event_id: 1)
review = Review.create!(body: "The venue is very clean and well maintained", rating: 5, reviewer_id: 1, event_id: 1, reservation_id: 1)
review2 = Review.create!(body: "The venue is excellent", rating: 4, reviewer_id: 1, event_id: 1, reservation_id: 1)
savedevent = SavedEvent.create(user_id: 1, event_id: 1)