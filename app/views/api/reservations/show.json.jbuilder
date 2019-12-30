json.set! "reservation" do 
    json.extract! @reservation, :id, :time, :date, :num_participants, :event_id, :phone_number, :participant_id
end

json.set! "event" do 
    json.set! @reservation.event.id do 
        json.extract! @reservation.event, :id,
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

        if @reservation.event.photo.attached?
            json.photoUrl url_for(@reservation.event.photo)
        end
    end
end



