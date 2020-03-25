class 
    Effects::SearchesController < ApplicationController
    def index
        @effects = Effect.search(params[:keyword])
    end
end
