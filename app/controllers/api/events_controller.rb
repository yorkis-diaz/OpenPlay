class Api::EventsController < ApplicationController
    def index
        @events = Event.all.includes(:reviews)
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end
end
