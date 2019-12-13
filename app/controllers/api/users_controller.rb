class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id]).includes(:reservations, :saved_events)
    end

    def create
        @user = User.new(user_params)

        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user.find(params.id)

        if @user.update_attributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user.find(params[:id])

        if @user.destroy
            render json: { message: "account deleted successfully" }
        else
            render @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :firstname, :lastname, :password)
    end
end
