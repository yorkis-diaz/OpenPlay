class Api::EventsController < ApplicationController
    def index
        @events = Event.includes(:reviews).all
    end

    def show
        @event = Event.includes(:reviews, :reviewers).find(params[:id])
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
