class Api::EventsController < ApplicationController
    def index
        @events = Event.all.includes(:reviews)
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def search
        if params[:search].present? 
            @events = Event.search(params[:search]) 
            render :index  
        else
            render json: {message:'No results found' }
        end
    end
    
end
