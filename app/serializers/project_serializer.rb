class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :text, :img, :title
  has_many :tones, as: :analyzable
  has_many :sentences
end
