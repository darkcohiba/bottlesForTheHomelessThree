class AddressSerializer < ActiveModel::Serializer
  attributes :id, :line_1, :city, :state, :country, :zipcode, :longitude, :latitude
  belongs_to :bottle
  has_one :post
  has_one :user
end
