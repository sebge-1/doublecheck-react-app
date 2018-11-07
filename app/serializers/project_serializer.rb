class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_many :tones, as: :analyzable
  has_many :sentences
end
