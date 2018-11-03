class ProjectSerializer < ActiveModel::Serializer
  attributes :id
  has_one :document
end
