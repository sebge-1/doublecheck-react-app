class SentenceSerializer < ActiveModel::Serializer
  attributes :id, :text
  belongs_to :project
  has_many :tones, as: :analyzable
end
