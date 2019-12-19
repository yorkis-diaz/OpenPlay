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

json.set! "events" do 
    user.events.each do |event|
        json.set! event.id do 
            json.extract! event, :id,
                :name,
                :info,
                :lat,
                :lng,
                :event_city,
                :event_state,
                :event_zipcode,
                :event_country,
                :event_type,
                :participation_open_time,
                :participation_close_time,
                :event_duration,
                :phone,
                :skill_level,
                :rating,
                :address,
                :capacity,
                :cost

            if event.photo.attached?
                json.photoUrl url_for(event.photo)
            end
        end
    end
end


