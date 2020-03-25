class UsersController < ApplicationController
    def show
        user = User.find(params[:id])
        @nickname = user.nickname
        @effects = user.effects
    end
end
