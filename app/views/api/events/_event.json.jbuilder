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
    json.reviews_count event.reviews.length