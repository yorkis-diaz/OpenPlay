class Api::SessionsController < ApplicationController
    def create

        @user = User.find_by_credentials(
            user_params[:email],
            user_params[:password]
        )


        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Wrong email/password combo"], status: 422
        end
    end

    def destroy
        if current_user
            log_out
            render json: { message: "Logout Successful"}
        else
            render json: {}, status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
