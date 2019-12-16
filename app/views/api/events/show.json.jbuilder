json.set! "event" do 
    json.set! @event.id do
        json.partial! 'event', event: @event
    end
end

json.set! "reviews" do 
    @event.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :body, :rating, :event_id, :reviewer_id, :reservation_id
        end
    end
end

json.set! "reviewers" do 
    @event.reviewers.each do |reviewer|
        json.set! reviewer.id do 
            json.extract! reviewer, :firstname, :lastname
        end
    end
end
