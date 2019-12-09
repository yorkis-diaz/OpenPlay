class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            email: user_params[:email],
            password: user_params[:password]
        )

        if user
            login(@user)
            render "api/users/show"
        else
            render json: ["wrong email/password combo"], status: 422
        end
    end

    def destroy
        if current_user
            logout
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
