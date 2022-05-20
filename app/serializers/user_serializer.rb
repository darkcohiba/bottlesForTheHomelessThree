class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :isNonProfit
  has_many :posts
  has_many :comments
  has_many :bottles
end
