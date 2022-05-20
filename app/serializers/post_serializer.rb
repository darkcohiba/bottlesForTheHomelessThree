class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  belongs_to :user
  has_many :comments
  has_one :bottle
  has_one :addresses, through: :bottle
end
