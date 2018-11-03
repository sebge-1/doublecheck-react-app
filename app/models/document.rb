class Document < ApplicationRecord
  has_many :document_tones
  has_many :sentences
end
