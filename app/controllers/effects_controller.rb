class EffectsController < ApplicationController
    before_action :move_to_index, except: [:index, :show, :search]
    def index
        @effects = Effect.includes(:user).order("created_at DESC").page(params[:page]).per(16)
    end
    
    def new
        @effect = Effect.new
    end
    
    def create
        Effect.create(effect_params)
        @effects = Effect.all.order("created_at DESC").page(params[:page]).per(16)
        if 
        render :index
    end
    def destroy
        effect = Effect.find(params[:id])
        effect.destroy
        redirect_to user_path(current_user.id)
    end
    def show
        @effect = Effect.find(params[:id])
        @comment = Comment.new
        @comments = @effect.comments.includes(:user)
    end
    def edit
        @effect = Effect.find(params[:id])
    end
    def update
        effect = Effect.find(params[:id])
        effect.update(effect_params)
        redirect_to user_path(current_user.id)
    end
    def search
        binding.pry
        @effects = Effect.search(params[:keyword]).order("created_at DESC").page(params[:page]).per(16)
    end
    private
    def effect_params
        params.require(:effect).permit(:nickname, :image, :name, :attri, :text, :maker,:keyword).merge(user_id: current_user.id)
    end
    def move_to_index
        redirect_to action: :index unless user_signed_in?
    end
end
