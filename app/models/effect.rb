class Effect < ApplicationRecord
    def show
        @comment = Comment.new
        @comments = @effect.comments.includes(:user)
    end
    def self.search(search)
        return Effect.all unless search
        Effect.where('text LIKE(?)', "%#{search}%")
    end
    validates :image,:text, presence: true
    self.inheritance_column = :_type_disabled
    mount_uploader :image, ImageUploader
    belongs_to :user
    has_many :comments 
end
