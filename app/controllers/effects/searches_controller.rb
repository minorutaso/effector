class 
    Effects::SearchesController < ApplicationController
    def index
        @effects = Effect.search(params[:keyword]).order("created_at DESC").page(params[:page]).per(16)
    end
end
