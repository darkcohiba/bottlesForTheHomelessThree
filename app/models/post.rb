class Post < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_one :bottle
    has_one :addresses, through: :bottle
end
