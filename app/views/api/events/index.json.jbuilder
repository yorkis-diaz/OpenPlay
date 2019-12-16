@events.each do |event|
    json.set! event.id do 
        json.partial! 'event', event: event
        json.reviews_count event.reviews.length
    end
end


