json.set! "user" do
    json.extract! @user, :id, :email, :firstname, :lastname
end

json.set! "reservations" do
    @user.reservations.each do |reservation|
        json.extract! reservation, :id, :time, :num_participants, :event_id
    end
end

json.set! "savedEvents" do 
    @user.saved_events.each do |saved_event|
        json.extract! saved_event, :id, :user_id, :event_id
    end
end