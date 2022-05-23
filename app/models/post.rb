class Post < ApplicationRecord
    belongs_to :user
    has_many :comments, dependent: :destroy
    has_one :bottle, dependent: :destroy
    has_one :addresses, through: :bottle, dependent: :destroy
end
