class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :created_at, :updated_at
  has_one :user
end
