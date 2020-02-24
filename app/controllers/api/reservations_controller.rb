class Api::ReservationsController < ApplicationController
    def show
        @reservation = Reservation.includes(:event).find(params[:id])
    end

    def create
        user = User.find(params[:user_id])
        @reservation = user.reservations.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update_attributes(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        render json: {message: "destroyed successfully"} 
    end

    private 
    def reservation_params
        params.require(:reservation).permit(:time, :num_participants, :date, :participant_id, :event_id, :phone_number
    end
end
