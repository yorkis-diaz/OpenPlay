class Api::SavedEventsController < ApplicationController
    def create
        user = User.find(params[:id])
        saved_event = user.saved_events.new(favorite_params)
        if saved_event.saved
            render json: { message: "Event saved successfully"}
        else
            render json: saved_event.errors.full_messages, status: 422
        end
    end

    def destroy
        
    end

    def favorite_params
        params.require(:event).permit(:event_id)
    end
end
