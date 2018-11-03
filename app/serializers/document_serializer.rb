class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :text
  belongs_to :project
  has_many :document_tones
  has_many :sentences
end
