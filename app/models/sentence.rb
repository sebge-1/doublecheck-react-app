class Sentence < ApplicationRecord
  belongs_to :document
  has_many :sentence_tones
end
