class BottleSerializer < ActiveModel::Serializer
  attributes :id, :picture, :isGlass
  has_one :address
end
