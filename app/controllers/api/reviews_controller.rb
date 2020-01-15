class Api::ReviewsController < ApplicationController
    def index 
        user = User.includes(:reviews).find(params[:user_id])
        @reviews = user.reviews
        render :index
    end

    def create 
        reservation = Reservation.find(params[:reservation_id])
        @review = reservation.reviews.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    private
    def review_params
        params.require(:review).permit(:body, :rating, :reviewer_id, :event_id)
    end
end
