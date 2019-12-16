class Api::SavedEventsController < ApplicationController
    def create
        user = User.find(params[:user_id])
        @saved_event = user.saved_events.new(favorite_params)
        if @saved_event.save
            render :show
        else
            render json: saved_event.errors.full_messages, status: 422
        end
    end

    def destroy
        saved_event = SavedEvent.find(params[:id])
        saved_event.destroy
        render json: {message: "unsaved successfully"}
    end

    def favorite_params
        params.require(:event).permit(:event_id)
    end
end
