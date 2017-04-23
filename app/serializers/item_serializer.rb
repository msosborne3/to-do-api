class ItemSerializer < ActiveModel::Serializer
  attributes :id, :text, :done
  belongs_to :list
end
