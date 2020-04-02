class CommentsController < ApplicationController
    def create
        @effect = Effect.all
        @comment = Comment.create(comment_params)
        respond_to do |format|
          format.html { redirect_to effect_path(params[:effect_id])  }
          format.json
        end
    end
    # def destroy
    #     comment = Comment.find(params[:id])
    #     comment.destroy
    #     redirect_to effect_path(comment.id)
    # end
    
    private
    def comment_params
        params.require(:comment).permit(:text).merge(user_id: current_user.id, effect_id: params[:effect_id])
    end 
end
