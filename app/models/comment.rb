class Comment < ApplicationRecord
    belongs_to :effect
    belongs_to :user  
    validates :text, presence: true
end
