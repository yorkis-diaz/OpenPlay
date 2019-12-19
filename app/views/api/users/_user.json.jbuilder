json.set! "user" do
    json.extract! user, :id, :email, :firstname, :lastname, :created_at
end

json.set! "reservations" do
    user.reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :time, :num_participants, :event_id, :date, :participant_id
        end
    end
end

json.set! "savedEvents" do 
    user.saved_events.each do |saved_event|
        json.set! saved_event.id do 
            json.extract! saved_event, :id, :user_id, :event_id
        end
    end
end