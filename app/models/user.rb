class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :comments
    has_many :bottles, through: :posts
    has_secure_password
end
