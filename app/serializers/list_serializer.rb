class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :counter
  has_many :items
end
