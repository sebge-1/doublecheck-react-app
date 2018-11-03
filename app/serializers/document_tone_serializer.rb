class DocumentToneSerializer < ActiveModel::Serializer
  attributes :id, :document_id, :score, :tone_name
  belongs_to :document
end
