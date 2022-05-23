class BottleSerializer < ActiveModel::Serializer
  attributes :id, :picture, :isGlass, :isClaimed
  has_one :address
end
