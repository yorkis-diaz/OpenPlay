

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

json.set! "review_ids" do
    json.array! event.reviews do |review|
        review.id
    end
end