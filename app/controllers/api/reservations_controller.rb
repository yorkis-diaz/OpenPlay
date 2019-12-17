class Api::ReservationsController < ApplicationController
    def create
        @reservation = current_user.reservations.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update_attributes(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages
        end
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        render json: {message: "destroyed successfully"} 
    end

    private 
    def reservation_params
        params.require(:reservation).permit(:time, :num_participants, :date, :participant_id, :event_id)
        #need phone number
    end
end
