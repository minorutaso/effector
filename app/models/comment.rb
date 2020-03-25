class Comment < ApplicationRecord
    belongs_to :effect
    belongs_to :user  
end
