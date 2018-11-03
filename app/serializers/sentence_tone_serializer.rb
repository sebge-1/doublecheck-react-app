class SentenceToneSerializer < ActiveModel::Serializer
  attributes :id, :sentence_id, :score, :tone_name
  belongs_to :sentence
end
