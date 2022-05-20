class Address < ApplicationRecord
    belongs_to :bottle
    has_one :post, through: :bottle
    has_one :user, through: :post
end
