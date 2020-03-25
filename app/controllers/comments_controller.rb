class CommentsController < ApplicationController
    def create
        @effect = Effect.all
        comment = Comment.create(comment_params)
        redirect_to "/effects/#{comment.effect.id}" 
    end
    
    private
    def comment_params
        params.require(:comment).permit(:text).merge(user_id: current_user.id, effect_id: params[:effect_id])
    end 
end
