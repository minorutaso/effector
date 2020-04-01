class UsersController < ApplicationController
    def show
        user = User.find(params[:id])
        @nickname = user.nickname
        @effects = user.effects.order("created_at DESC").page(params[:page]).per(16)
    end
end
