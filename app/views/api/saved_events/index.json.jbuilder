@favorites.each do |favorite|
    json.set! favorite.id do 
        json.extract! favorite, :id,
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

        if favorite.photo.attached?
            json.photoUrl url_for(favorite.photo)
        end
    end
end