class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :isNonProfit, :created_at, :updated_at
  has_many :posts
  has_many :comments
  has_many :bottles
end
