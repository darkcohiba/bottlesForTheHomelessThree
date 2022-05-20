class Bottle < ApplicationRecord
    belongs_to :post
    has_one :address
end
