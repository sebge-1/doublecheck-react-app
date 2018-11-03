class SentenceSerializer < ActiveModel::Serializer
  attributes :id, :document_id, :text
  belongs_to :document
  has_many :sentence_tones
end
